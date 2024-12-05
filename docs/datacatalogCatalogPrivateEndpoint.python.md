# `datacatalogCatalogPrivateEndpoint` Submodule <a name="`datacatalogCatalogPrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatacatalogCatalogPrivateEndpoint <a name="DatacatalogCatalogPrivateEndpoint" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint oci_datacatalog_catalog_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datacatalog_catalog_private_endpoint

datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint(
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
  dns_zones: typing.List[str],
  subnet_id: str,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: DatacatalogCatalogPrivateEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#compartment_id DatacatalogCatalogPrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.dnsZones">dns_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#dns_zones DatacatalogCatalogPrivateEndpoint#dns_zones}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#subnet_id DatacatalogCatalogPrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#defined_tags DatacatalogCatalogPrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#display_name DatacatalogCatalogPrivateEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#freeform_tags DatacatalogCatalogPrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#id DatacatalogCatalogPrivateEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts">DatacatalogCatalogPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#compartment_id DatacatalogCatalogPrivateEndpoint#compartment_id}.

---

##### `dns_zones`<sup>Required</sup> <a name="dns_zones" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.dnsZones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#dns_zones DatacatalogCatalogPrivateEndpoint#dns_zones}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#subnet_id DatacatalogCatalogPrivateEndpoint#subnet_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#defined_tags DatacatalogCatalogPrivateEndpoint#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#display_name DatacatalogCatalogPrivateEndpoint#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#freeform_tags DatacatalogCatalogPrivateEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#id DatacatalogCatalogPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts">DatacatalogCatalogPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#timeouts DatacatalogCatalogPrivateEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#create DatacatalogCatalogPrivateEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#delete DatacatalogCatalogPrivateEndpoint#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#update DatacatalogCatalogPrivateEndpoint#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatacatalogCatalogPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import datacatalog_catalog_private_endpoint

datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import datacatalog_catalog_private_endpoint

datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import datacatalog_catalog_private_endpoint

datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import datacatalog_catalog_private_endpoint

datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatacatalogCatalogPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatacatalogCatalogPrivateEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatacatalogCatalogPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatacatalogCatalogPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.attachedCatalogs">attached_catalogs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList">DatacatalogCatalogPrivateEndpointLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference">DatacatalogCatalogPrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.dnsZonesInput">dns_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts">DatacatalogCatalogPrivateEndpointTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.dnsZones">dns_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attached_catalogs`<sup>Required</sup> <a name="attached_catalogs" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.attachedCatalogs"></a>

```python
attached_catalogs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.locks"></a>

```python
locks: DatacatalogCatalogPrivateEndpointLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList">DatacatalogCatalogPrivateEndpointLocksList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.timeouts"></a>

```python
timeouts: DatacatalogCatalogPrivateEndpointTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference">DatacatalogCatalogPrivateEndpointTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `dns_zones_input`<sup>Optional</sup> <a name="dns_zones_input" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.dnsZonesInput"></a>

```python
dns_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatacatalogCatalogPrivateEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts">DatacatalogCatalogPrivateEndpointTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dns_zones`<sup>Required</sup> <a name="dns_zones" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.dnsZones"></a>

```python
dns_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatacatalogCatalogPrivateEndpointConfig <a name="DatacatalogCatalogPrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datacatalog_catalog_private_endpoint

datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  dns_zones: typing.List[str],
  subnet_id: str,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: DatacatalogCatalogPrivateEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#compartment_id DatacatalogCatalogPrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.dnsZones">dns_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#dns_zones DatacatalogCatalogPrivateEndpoint#dns_zones}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#subnet_id DatacatalogCatalogPrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#defined_tags DatacatalogCatalogPrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#display_name DatacatalogCatalogPrivateEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#freeform_tags DatacatalogCatalogPrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#id DatacatalogCatalogPrivateEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts">DatacatalogCatalogPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#compartment_id DatacatalogCatalogPrivateEndpoint#compartment_id}.

---

##### `dns_zones`<sup>Required</sup> <a name="dns_zones" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.dnsZones"></a>

```python
dns_zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#dns_zones DatacatalogCatalogPrivateEndpoint#dns_zones}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#subnet_id DatacatalogCatalogPrivateEndpoint#subnet_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#defined_tags DatacatalogCatalogPrivateEndpoint#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#display_name DatacatalogCatalogPrivateEndpoint#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#freeform_tags DatacatalogCatalogPrivateEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#id DatacatalogCatalogPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointConfig.property.timeouts"></a>

```python
timeouts: DatacatalogCatalogPrivateEndpointTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts">DatacatalogCatalogPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#timeouts DatacatalogCatalogPrivateEndpoint#timeouts}

---

### DatacatalogCatalogPrivateEndpointLocks <a name="DatacatalogCatalogPrivateEndpointLocks" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datacatalog_catalog_private_endpoint

datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocks()
```


### DatacatalogCatalogPrivateEndpointTimeouts <a name="DatacatalogCatalogPrivateEndpointTimeouts" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datacatalog_catalog_private_endpoint

datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#create DatacatalogCatalogPrivateEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#delete DatacatalogCatalogPrivateEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#update DatacatalogCatalogPrivateEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#create DatacatalogCatalogPrivateEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#delete DatacatalogCatalogPrivateEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datacatalog_catalog_private_endpoint#update DatacatalogCatalogPrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatacatalogCatalogPrivateEndpointLocksList <a name="DatacatalogCatalogPrivateEndpointLocksList" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datacatalog_catalog_private_endpoint

datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatacatalogCatalogPrivateEndpointLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatacatalogCatalogPrivateEndpointLocksOutputReference <a name="DatacatalogCatalogPrivateEndpointLocksOutputReference" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datacatalog_catalog_private_endpoint

datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocks">DatacatalogCatalogPrivateEndpointLocks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocksOutputReference.property.internalValue"></a>

```python
internal_value: DatacatalogCatalogPrivateEndpointLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointLocks">DatacatalogCatalogPrivateEndpointLocks</a>

---


### DatacatalogCatalogPrivateEndpointTimeoutsOutputReference <a name="DatacatalogCatalogPrivateEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datacatalog_catalog_private_endpoint

datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts">DatacatalogCatalogPrivateEndpointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatacatalogCatalogPrivateEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datacatalogCatalogPrivateEndpoint.DatacatalogCatalogPrivateEndpointTimeouts">DatacatalogCatalogPrivateEndpointTimeouts</a>]

---



