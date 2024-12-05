# `serviceMeshIngressGatewayRouteTable` Submodule <a name="`serviceMeshIngressGatewayRouteTable` Submodule" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceMeshIngressGatewayRouteTable <a name="ServiceMeshIngressGatewayRouteTable" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table oci_service_mesh_ingress_gateway_route_table}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway_route_table

serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  ingress_gateway_id: str,
  name: str,
  route_rules: typing.Union[IResolvable, typing.List[ServiceMeshIngressGatewayRouteTableRouteRules]],
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  priority: typing.Union[int, float] = None,
  timeouts: ServiceMeshIngressGatewayRouteTableTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#compartment_id ServiceMeshIngressGatewayRouteTable#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.ingressGatewayId">ingress_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#ingress_gateway_id ServiceMeshIngressGatewayRouteTable#ingress_gateway_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#name ServiceMeshIngressGatewayRouteTable#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.routeRules">route_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules">ServiceMeshIngressGatewayRouteTableRouteRules</a>]]</code> | route_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#defined_tags ServiceMeshIngressGatewayRouteTable#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#description ServiceMeshIngressGatewayRouteTable#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#freeform_tags ServiceMeshIngressGatewayRouteTable#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#id ServiceMeshIngressGatewayRouteTable#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#priority ServiceMeshIngressGatewayRouteTable#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts">ServiceMeshIngressGatewayRouteTableTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#compartment_id ServiceMeshIngressGatewayRouteTable#compartment_id}.

---

##### `ingress_gateway_id`<sup>Required</sup> <a name="ingress_gateway_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.ingressGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#ingress_gateway_id ServiceMeshIngressGatewayRouteTable#ingress_gateway_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#name ServiceMeshIngressGatewayRouteTable#name}.

---

##### `route_rules`<sup>Required</sup> <a name="route_rules" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.routeRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules">ServiceMeshIngressGatewayRouteTableRouteRules</a>]]

route_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#route_rules ServiceMeshIngressGatewayRouteTable#route_rules}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#defined_tags ServiceMeshIngressGatewayRouteTable#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#description ServiceMeshIngressGatewayRouteTable#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#freeform_tags ServiceMeshIngressGatewayRouteTable#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#id ServiceMeshIngressGatewayRouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#priority ServiceMeshIngressGatewayRouteTable#priority}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts">ServiceMeshIngressGatewayRouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#timeouts ServiceMeshIngressGatewayRouteTable#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.putRouteRules">put_route_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_route_rules` <a name="put_route_rules" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.putRouteRules"></a>

```python
def put_route_rules(
  value: typing.Union[IResolvable, typing.List[ServiceMeshIngressGatewayRouteTableRouteRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.putRouteRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules">ServiceMeshIngressGatewayRouteTableRouteRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#create ServiceMeshIngressGatewayRouteTable#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#delete ServiceMeshIngressGatewayRouteTable#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#update ServiceMeshIngressGatewayRouteTable#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_priority` <a name="reset_priority" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServiceMeshIngressGatewayRouteTable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway_route_table

serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway_route_table

serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway_route_table

serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway_route_table

serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServiceMeshIngressGatewayRouteTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServiceMeshIngressGatewayRouteTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServiceMeshIngressGatewayRouteTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceMeshIngressGatewayRouteTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.routeRules">route_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList">ServiceMeshIngressGatewayRouteTableRouteRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference">ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.ingressGatewayIdInput">ingress_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.routeRulesInput">route_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules">ServiceMeshIngressGatewayRouteTableRouteRules</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts">ServiceMeshIngressGatewayRouteTableTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.ingressGatewayId">ingress_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `route_rules`<sup>Required</sup> <a name="route_rules" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.routeRules"></a>

```python
route_rules: ServiceMeshIngressGatewayRouteTableRouteRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList">ServiceMeshIngressGatewayRouteTableRouteRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.timeouts"></a>

```python
timeouts: ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference">ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingress_gateway_id_input`<sup>Optional</sup> <a name="ingress_gateway_id_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.ingressGatewayIdInput"></a>

```python
ingress_gateway_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `route_rules_input`<sup>Optional</sup> <a name="route_rules_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.routeRulesInput"></a>

```python
route_rules_input: typing.Union[IResolvable, typing.List[ServiceMeshIngressGatewayRouteTableRouteRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules">ServiceMeshIngressGatewayRouteTableRouteRules</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ServiceMeshIngressGatewayRouteTableTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts">ServiceMeshIngressGatewayRouteTableTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingress_gateway_id`<sup>Required</sup> <a name="ingress_gateway_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.ingressGatewayId"></a>

```python
ingress_gateway_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceMeshIngressGatewayRouteTableConfig <a name="ServiceMeshIngressGatewayRouteTableConfig" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway_route_table

serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  ingress_gateway_id: str,
  name: str,
  route_rules: typing.Union[IResolvable, typing.List[ServiceMeshIngressGatewayRouteTableRouteRules]],
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  priority: typing.Union[int, float] = None,
  timeouts: ServiceMeshIngressGatewayRouteTableTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#compartment_id ServiceMeshIngressGatewayRouteTable#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.ingressGatewayId">ingress_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#ingress_gateway_id ServiceMeshIngressGatewayRouteTable#ingress_gateway_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#name ServiceMeshIngressGatewayRouteTable#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.routeRules">route_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules">ServiceMeshIngressGatewayRouteTableRouteRules</a>]]</code> | route_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#defined_tags ServiceMeshIngressGatewayRouteTable#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#description ServiceMeshIngressGatewayRouteTable#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#freeform_tags ServiceMeshIngressGatewayRouteTable#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#id ServiceMeshIngressGatewayRouteTable#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#priority ServiceMeshIngressGatewayRouteTable#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts">ServiceMeshIngressGatewayRouteTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#compartment_id ServiceMeshIngressGatewayRouteTable#compartment_id}.

---

##### `ingress_gateway_id`<sup>Required</sup> <a name="ingress_gateway_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.ingressGatewayId"></a>

```python
ingress_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#ingress_gateway_id ServiceMeshIngressGatewayRouteTable#ingress_gateway_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#name ServiceMeshIngressGatewayRouteTable#name}.

---

##### `route_rules`<sup>Required</sup> <a name="route_rules" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.routeRules"></a>

```python
route_rules: typing.Union[IResolvable, typing.List[ServiceMeshIngressGatewayRouteTableRouteRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules">ServiceMeshIngressGatewayRouteTableRouteRules</a>]]

route_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#route_rules ServiceMeshIngressGatewayRouteTable#route_rules}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#defined_tags ServiceMeshIngressGatewayRouteTable#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#description ServiceMeshIngressGatewayRouteTable#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#freeform_tags ServiceMeshIngressGatewayRouteTable#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#id ServiceMeshIngressGatewayRouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#priority ServiceMeshIngressGatewayRouteTable#priority}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.timeouts"></a>

```python
timeouts: ServiceMeshIngressGatewayRouteTableTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts">ServiceMeshIngressGatewayRouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#timeouts ServiceMeshIngressGatewayRouteTable#timeouts}

---

### ServiceMeshIngressGatewayRouteTableRouteRules <a name="ServiceMeshIngressGatewayRouteTableRouteRules" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway_route_table

serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules(
  destinations: typing.Union[IResolvable, typing.List[ServiceMeshIngressGatewayRouteTableRouteRulesDestinations]],
  type: str,
  ingress_gateway_host: ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost = None,
  is_grpc: typing.Union[bool, IResolvable] = None,
  is_host_rewrite_enabled: typing.Union[bool, IResolvable] = None,
  is_path_rewrite_enabled: typing.Union[bool, IResolvable] = None,
  path: str = None,
  path_type: str = None,
  request_timeout_in_ms: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.destinations">destinations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations">ServiceMeshIngressGatewayRouteTableRouteRulesDestinations</a>]]</code> | destinations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#type ServiceMeshIngressGatewayRouteTable#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.ingressGatewayHost">ingress_gateway_host</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost</a></code> | ingress_gateway_host block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.isGrpc">is_grpc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#is_grpc ServiceMeshIngressGatewayRouteTable#is_grpc}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.isHostRewriteEnabled">is_host_rewrite_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#is_host_rewrite_enabled ServiceMeshIngressGatewayRouteTable#is_host_rewrite_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.isPathRewriteEnabled">is_path_rewrite_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#is_path_rewrite_enabled ServiceMeshIngressGatewayRouteTable#is_path_rewrite_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#path ServiceMeshIngressGatewayRouteTable#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.pathType">path_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#path_type ServiceMeshIngressGatewayRouteTable#path_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.requestTimeoutInMs">request_timeout_in_ms</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#request_timeout_in_ms ServiceMeshIngressGatewayRouteTable#request_timeout_in_ms}. |

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.destinations"></a>

```python
destinations: typing.Union[IResolvable, typing.List[ServiceMeshIngressGatewayRouteTableRouteRulesDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations">ServiceMeshIngressGatewayRouteTableRouteRulesDestinations</a>]]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#destinations ServiceMeshIngressGatewayRouteTable#destinations}

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#type ServiceMeshIngressGatewayRouteTable#type}.

---

##### `ingress_gateway_host`<sup>Optional</sup> <a name="ingress_gateway_host" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.ingressGatewayHost"></a>

```python
ingress_gateway_host: ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost</a>

ingress_gateway_host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#ingress_gateway_host ServiceMeshIngressGatewayRouteTable#ingress_gateway_host}

---

##### `is_grpc`<sup>Optional</sup> <a name="is_grpc" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.isGrpc"></a>

```python
is_grpc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#is_grpc ServiceMeshIngressGatewayRouteTable#is_grpc}.

---

##### `is_host_rewrite_enabled`<sup>Optional</sup> <a name="is_host_rewrite_enabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.isHostRewriteEnabled"></a>

```python
is_host_rewrite_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#is_host_rewrite_enabled ServiceMeshIngressGatewayRouteTable#is_host_rewrite_enabled}.

---

##### `is_path_rewrite_enabled`<sup>Optional</sup> <a name="is_path_rewrite_enabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.isPathRewriteEnabled"></a>

```python
is_path_rewrite_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#is_path_rewrite_enabled ServiceMeshIngressGatewayRouteTable#is_path_rewrite_enabled}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#path ServiceMeshIngressGatewayRouteTable#path}.

---

##### `path_type`<sup>Optional</sup> <a name="path_type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.pathType"></a>

```python
path_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#path_type ServiceMeshIngressGatewayRouteTable#path_type}.

---

##### `request_timeout_in_ms`<sup>Optional</sup> <a name="request_timeout_in_ms" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.requestTimeoutInMs"></a>

```python
request_timeout_in_ms: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#request_timeout_in_ms ServiceMeshIngressGatewayRouteTable#request_timeout_in_ms}.

---

### ServiceMeshIngressGatewayRouteTableRouteRulesDestinations <a name="ServiceMeshIngressGatewayRouteTableRouteRulesDestinations" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway_route_table

serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations(
  virtual_service_id: str,
  port: typing.Union[int, float] = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations.property.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#virtual_service_id ServiceMeshIngressGatewayRouteTable#virtual_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#port ServiceMeshIngressGatewayRouteTable#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#weight ServiceMeshIngressGatewayRouteTable#weight}. |

---

##### `virtual_service_id`<sup>Required</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations.property.virtualServiceId"></a>

```python
virtual_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#virtual_service_id ServiceMeshIngressGatewayRouteTable#virtual_service_id}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#port ServiceMeshIngressGatewayRouteTable#port}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#weight ServiceMeshIngressGatewayRouteTable#weight}.

---

### ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost <a name="ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway_route_table

serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost(
  name: str,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#name ServiceMeshIngressGatewayRouteTable#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#port ServiceMeshIngressGatewayRouteTable#port}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#name ServiceMeshIngressGatewayRouteTable#name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#port ServiceMeshIngressGatewayRouteTable#port}.

---

### ServiceMeshIngressGatewayRouteTableTimeouts <a name="ServiceMeshIngressGatewayRouteTableTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway_route_table

serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#create ServiceMeshIngressGatewayRouteTable#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#delete ServiceMeshIngressGatewayRouteTable#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#update ServiceMeshIngressGatewayRouteTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#create ServiceMeshIngressGatewayRouteTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#delete ServiceMeshIngressGatewayRouteTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#update ServiceMeshIngressGatewayRouteTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList <a name="ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway_route_table

serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations">ServiceMeshIngressGatewayRouteTableRouteRulesDestinations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceMeshIngressGatewayRouteTableRouteRulesDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations">ServiceMeshIngressGatewayRouteTableRouteRulesDestinations</a>]]

---


### ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference <a name="ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway_route_table

serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_weight` <a name="reset_weight" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.virtualServiceIdInput">virtual_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations">ServiceMeshIngressGatewayRouteTableRouteRulesDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtual_service_id_input`<sup>Optional</sup> <a name="virtual_service_id_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.virtualServiceIdInput"></a>

```python
virtual_service_id_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtual_service_id`<sup>Required</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.virtualServiceId"></a>

```python
virtual_service_id: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceMeshIngressGatewayRouteTableRouteRulesDestinations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations">ServiceMeshIngressGatewayRouteTableRouteRulesDestinations</a>]

---


### ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference <a name="ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway_route_table

serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.internalValue"></a>

```python
internal_value: ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost</a>

---


### ServiceMeshIngressGatewayRouteTableRouteRulesList <a name="ServiceMeshIngressGatewayRouteTableRouteRulesList" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway_route_table

serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules">ServiceMeshIngressGatewayRouteTableRouteRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceMeshIngressGatewayRouteTableRouteRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules">ServiceMeshIngressGatewayRouteTableRouteRules</a>]]

---


### ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference <a name="ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway_route_table

serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.putDestinations">put_destinations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.putIngressGatewayHost">put_ingress_gateway_host</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetIngressGatewayHost">reset_ingress_gateway_host</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetIsGrpc">reset_is_grpc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetIsHostRewriteEnabled">reset_is_host_rewrite_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetIsPathRewriteEnabled">reset_is_path_rewrite_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetPathType">reset_path_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetRequestTimeoutInMs">reset_request_timeout_in_ms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destinations` <a name="put_destinations" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.putDestinations"></a>

```python
def put_destinations(
  value: typing.Union[IResolvable, typing.List[ServiceMeshIngressGatewayRouteTableRouteRulesDestinations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.putDestinations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations">ServiceMeshIngressGatewayRouteTableRouteRulesDestinations</a>]]

---

##### `put_ingress_gateway_host` <a name="put_ingress_gateway_host" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.putIngressGatewayHost"></a>

```python
def put_ingress_gateway_host(
  name: str,
  port: typing.Union[int, float] = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.putIngressGatewayHost.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#name ServiceMeshIngressGatewayRouteTable#name}.

---

###### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.putIngressGatewayHost.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#port ServiceMeshIngressGatewayRouteTable#port}.

---

##### `reset_ingress_gateway_host` <a name="reset_ingress_gateway_host" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetIngressGatewayHost"></a>

```python
def reset_ingress_gateway_host() -> None
```

##### `reset_is_grpc` <a name="reset_is_grpc" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetIsGrpc"></a>

```python
def reset_is_grpc() -> None
```

##### `reset_is_host_rewrite_enabled` <a name="reset_is_host_rewrite_enabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetIsHostRewriteEnabled"></a>

```python
def reset_is_host_rewrite_enabled() -> None
```

##### `reset_is_path_rewrite_enabled` <a name="reset_is_path_rewrite_enabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetIsPathRewriteEnabled"></a>

```python
def reset_is_path_rewrite_enabled() -> None
```

##### `reset_path` <a name="reset_path" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_path_type` <a name="reset_path_type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetPathType"></a>

```python
def reset_path_type() -> None
```

##### `reset_request_timeout_in_ms` <a name="reset_request_timeout_in_ms" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetRequestTimeoutInMs"></a>

```python
def reset_request_timeout_in_ms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.destinations">destinations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList">ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.ingressGatewayHost">ingress_gateway_host</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.destinationsInput">destinations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations">ServiceMeshIngressGatewayRouteTableRouteRulesDestinations</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.ingressGatewayHostInput">ingress_gateway_host_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isGrpcInput">is_grpc_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isHostRewriteEnabledInput">is_host_rewrite_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isPathRewriteEnabledInput">is_path_rewrite_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.pathTypeInput">path_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.requestTimeoutInMsInput">request_timeout_in_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isGrpc">is_grpc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isHostRewriteEnabled">is_host_rewrite_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isPathRewriteEnabled">is_path_rewrite_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.pathType">path_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.requestTimeoutInMs">request_timeout_in_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules">ServiceMeshIngressGatewayRouteTableRouteRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.destinations"></a>

```python
destinations: ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList">ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList</a>

---

##### `ingress_gateway_host`<sup>Required</sup> <a name="ingress_gateway_host" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.ingressGatewayHost"></a>

```python
ingress_gateway_host: ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference</a>

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.destinationsInput"></a>

```python
destinations_input: typing.Union[IResolvable, typing.List[ServiceMeshIngressGatewayRouteTableRouteRulesDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations">ServiceMeshIngressGatewayRouteTableRouteRulesDestinations</a>]]

---

##### `ingress_gateway_host_input`<sup>Optional</sup> <a name="ingress_gateway_host_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.ingressGatewayHostInput"></a>

```python
ingress_gateway_host_input: ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost</a>

---

##### `is_grpc_input`<sup>Optional</sup> <a name="is_grpc_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isGrpcInput"></a>

```python
is_grpc_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_host_rewrite_enabled_input`<sup>Optional</sup> <a name="is_host_rewrite_enabled_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isHostRewriteEnabledInput"></a>

```python
is_host_rewrite_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_path_rewrite_enabled_input`<sup>Optional</sup> <a name="is_path_rewrite_enabled_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isPathRewriteEnabledInput"></a>

```python
is_path_rewrite_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path_type_input`<sup>Optional</sup> <a name="path_type_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.pathTypeInput"></a>

```python
path_type_input: str
```

- *Type:* str

---

##### `request_timeout_in_ms_input`<sup>Optional</sup> <a name="request_timeout_in_ms_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.requestTimeoutInMsInput"></a>

```python
request_timeout_in_ms_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `is_grpc`<sup>Required</sup> <a name="is_grpc" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isGrpc"></a>

```python
is_grpc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_host_rewrite_enabled`<sup>Required</sup> <a name="is_host_rewrite_enabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isHostRewriteEnabled"></a>

```python
is_host_rewrite_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_path_rewrite_enabled`<sup>Required</sup> <a name="is_path_rewrite_enabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isPathRewriteEnabled"></a>

```python
is_path_rewrite_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `path_type`<sup>Required</sup> <a name="path_type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.pathType"></a>

```python
path_type: str
```

- *Type:* str

---

##### `request_timeout_in_ms`<sup>Required</sup> <a name="request_timeout_in_ms" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.requestTimeoutInMs"></a>

```python
request_timeout_in_ms: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceMeshIngressGatewayRouteTableRouteRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules">ServiceMeshIngressGatewayRouteTableRouteRules</a>]

---


### ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference <a name="ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway_route_table

serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts">ServiceMeshIngressGatewayRouteTableTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceMeshIngressGatewayRouteTableTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts">ServiceMeshIngressGatewayRouteTableTimeouts</a>]

---



