# `dataOciServiceMeshIngressGatewayRouteTables` Submodule <a name="`dataOciServiceMeshIngressGatewayRouteTables` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshIngressGatewayRouteTables <a name="DataOciServiceMeshIngressGatewayRouteTables" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables oci_service_mesh_ingress_gateway_route_tables}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_tables

dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables(
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
  filter: typing.Union[IResolvable, typing.List[DataOciServiceMeshIngressGatewayRouteTablesFilter]] = None,
  id: str = None,
  ingress_gateway_id: str = None,
  name: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#compartment_id DataOciServiceMeshIngressGatewayRouteTables#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter">DataOciServiceMeshIngressGatewayRouteTablesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#id DataOciServiceMeshIngressGatewayRouteTables#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.ingressGatewayId">ingress_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#ingress_gateway_id DataOciServiceMeshIngressGatewayRouteTables#ingress_gateway_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#name DataOciServiceMeshIngressGatewayRouteTables#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#state DataOciServiceMeshIngressGatewayRouteTables#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#compartment_id DataOciServiceMeshIngressGatewayRouteTables#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter">DataOciServiceMeshIngressGatewayRouteTablesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#filter DataOciServiceMeshIngressGatewayRouteTables#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#id DataOciServiceMeshIngressGatewayRouteTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress_gateway_id`<sup>Optional</sup> <a name="ingress_gateway_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.ingressGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#ingress_gateway_id DataOciServiceMeshIngressGatewayRouteTables#ingress_gateway_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#name DataOciServiceMeshIngressGatewayRouteTables#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#state DataOciServiceMeshIngressGatewayRouteTables#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetIngressGatewayId">reset_ingress_gateway_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciServiceMeshIngressGatewayRouteTablesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter">DataOciServiceMeshIngressGatewayRouteTablesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ingress_gateway_id` <a name="reset_ingress_gateway_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetIngressGatewayId"></a>

```python
def reset_ingress_gateway_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciServiceMeshIngressGatewayRouteTables resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_tables

dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_tables

dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_tables

dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_tables

dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciServiceMeshIngressGatewayRouteTables resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciServiceMeshIngressGatewayRouteTables to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciServiceMeshIngressGatewayRouteTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshIngressGatewayRouteTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList">DataOciServiceMeshIngressGatewayRouteTablesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.ingressGatewayRouteTableCollection">ingress_gateway_route_table_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter">DataOciServiceMeshIngressGatewayRouteTablesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.ingressGatewayIdInput">ingress_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.ingressGatewayId">ingress_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.filter"></a>

```python
filter: DataOciServiceMeshIngressGatewayRouteTablesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList">DataOciServiceMeshIngressGatewayRouteTablesFilterList</a>

---

##### `ingress_gateway_route_table_collection`<sup>Required</sup> <a name="ingress_gateway_route_table_collection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.ingressGatewayRouteTableCollection"></a>

```python
ingress_gateway_route_table_collection: DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciServiceMeshIngressGatewayRouteTablesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter">DataOciServiceMeshIngressGatewayRouteTablesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingress_gateway_id_input`<sup>Optional</sup> <a name="ingress_gateway_id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.ingressGatewayIdInput"></a>

```python
ingress_gateway_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingress_gateway_id`<sup>Required</sup> <a name="ingress_gateway_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.ingressGatewayId"></a>

```python
ingress_gateway_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshIngressGatewayRouteTablesConfig <a name="DataOciServiceMeshIngressGatewayRouteTablesConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_tables

dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciServiceMeshIngressGatewayRouteTablesFilter]] = None,
  id: str = None,
  ingress_gateway_id: str = None,
  name: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#compartment_id DataOciServiceMeshIngressGatewayRouteTables#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter">DataOciServiceMeshIngressGatewayRouteTablesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#id DataOciServiceMeshIngressGatewayRouteTables#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.ingressGatewayId">ingress_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#ingress_gateway_id DataOciServiceMeshIngressGatewayRouteTables#ingress_gateway_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#name DataOciServiceMeshIngressGatewayRouteTables#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#state DataOciServiceMeshIngressGatewayRouteTables#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#compartment_id DataOciServiceMeshIngressGatewayRouteTables#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciServiceMeshIngressGatewayRouteTablesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter">DataOciServiceMeshIngressGatewayRouteTablesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#filter DataOciServiceMeshIngressGatewayRouteTables#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#id DataOciServiceMeshIngressGatewayRouteTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress_gateway_id`<sup>Optional</sup> <a name="ingress_gateway_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.ingressGatewayId"></a>

```python
ingress_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#ingress_gateway_id DataOciServiceMeshIngressGatewayRouteTables#ingress_gateway_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#name DataOciServiceMeshIngressGatewayRouteTables#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#state DataOciServiceMeshIngressGatewayRouteTables#state}.

---

### DataOciServiceMeshIngressGatewayRouteTablesFilter <a name="DataOciServiceMeshIngressGatewayRouteTablesFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_tables

dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#name DataOciServiceMeshIngressGatewayRouteTables#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#values DataOciServiceMeshIngressGatewayRouteTables#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#regex DataOciServiceMeshIngressGatewayRouteTables#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#name DataOciServiceMeshIngressGatewayRouteTables#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#values DataOciServiceMeshIngressGatewayRouteTables#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#regex DataOciServiceMeshIngressGatewayRouteTables#regex}.

---

### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_tables

dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection()
```


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_tables

dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems()
```


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_tables

dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules()
```


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_tables

dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations()
```


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_tables

dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshIngressGatewayRouteTablesFilterList <a name="DataOciServiceMeshIngressGatewayRouteTablesFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_tables

dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter">DataOciServiceMeshIngressGatewayRouteTablesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciServiceMeshIngressGatewayRouteTablesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter">DataOciServiceMeshIngressGatewayRouteTablesFilter</a>]]

---


### DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_tables

dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter">DataOciServiceMeshIngressGatewayRouteTablesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciServiceMeshIngressGatewayRouteTablesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter">DataOciServiceMeshIngressGatewayRouteTablesFilter</a>]

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_tables

dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_tables

dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.ingressGatewayId">ingress_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.routeRules">route_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingress_gateway_id`<sup>Required</sup> <a name="ingress_gateway_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.ingressGatewayId"></a>

```python
ingress_gateway_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `route_rules`<sup>Required</sup> <a name="route_rules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.routeRules"></a>

```python
route_rules: DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems</a>

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_tables

dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_tables

dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtual_service_id`<sup>Required</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.virtualServiceId"></a>

```python
virtual_service_id: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations</a>

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_tables

dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_tables

dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost</a>

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_tables

dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_tables

dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.destinations">destinations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.ingressGatewayHost">ingress_gateway_host</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.isGrpc">is_grpc</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.isHostRewriteEnabled">is_host_rewrite_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.isPathRewriteEnabled">is_path_rewrite_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.pathType">path_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.requestTimeoutInMs">request_timeout_in_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.destinations"></a>

```python
destinations: DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList</a>

---

##### `ingress_gateway_host`<sup>Required</sup> <a name="ingress_gateway_host" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.ingressGatewayHost"></a>

```python
ingress_gateway_host: DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList</a>

---

##### `is_grpc`<sup>Required</sup> <a name="is_grpc" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.isGrpc"></a>

```python
is_grpc: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_host_rewrite_enabled`<sup>Required</sup> <a name="is_host_rewrite_enabled" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.isHostRewriteEnabled"></a>

```python
is_host_rewrite_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_path_rewrite_enabled`<sup>Required</sup> <a name="is_path_rewrite_enabled" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.isPathRewriteEnabled"></a>

```python
is_path_rewrite_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `path_type`<sup>Required</sup> <a name="path_type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.pathType"></a>

```python
path_type: str
```

- *Type:* str

---

##### `request_timeout_in_ms`<sup>Required</sup> <a name="request_timeout_in_ms" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.requestTimeoutInMs"></a>

```python
request_timeout_in_ms: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules</a>

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_tables

dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_tables

dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.items"></a>

```python
items: DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection</a>

---



