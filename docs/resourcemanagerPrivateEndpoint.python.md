# `resourcemanagerPrivateEndpoint` Submodule <a name="`resourcemanagerPrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourcemanagerPrivateEndpoint <a name="ResourcemanagerPrivateEndpoint" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint oci_resourcemanager_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import resourcemanager_private_endpoint

resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint(
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
  display_name: str,
  subnet_id: str,
  vcn_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  dns_zones: typing.List[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_used_with_configuration_source_provider: typing.Union[bool, IResolvable] = None,
  nsg_id_list: typing.List[str] = None,
  timeouts: ResourcemanagerPrivateEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#compartment_id ResourcemanagerPrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#display_name ResourcemanagerPrivateEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#subnet_id ResourcemanagerPrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#vcn_id ResourcemanagerPrivateEndpoint#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#defined_tags ResourcemanagerPrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#description ResourcemanagerPrivateEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.dnsZones">dns_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#dns_zones ResourcemanagerPrivateEndpoint#dns_zones}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#freeform_tags ResourcemanagerPrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#id ResourcemanagerPrivateEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.isUsedWithConfigurationSourceProvider">is_used_with_configuration_source_provider</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#is_used_with_configuration_source_provider ResourcemanagerPrivateEndpoint#is_used_with_configuration_source_provider}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.nsgIdList">nsg_id_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#nsg_id_list ResourcemanagerPrivateEndpoint#nsg_id_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#compartment_id ResourcemanagerPrivateEndpoint#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#display_name ResourcemanagerPrivateEndpoint#display_name}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#subnet_id ResourcemanagerPrivateEndpoint#subnet_id}.

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.vcnId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#vcn_id ResourcemanagerPrivateEndpoint#vcn_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#defined_tags ResourcemanagerPrivateEndpoint#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#description ResourcemanagerPrivateEndpoint#description}.

---

##### `dns_zones`<sup>Optional</sup> <a name="dns_zones" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.dnsZones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#dns_zones ResourcemanagerPrivateEndpoint#dns_zones}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#freeform_tags ResourcemanagerPrivateEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#id ResourcemanagerPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_used_with_configuration_source_provider`<sup>Optional</sup> <a name="is_used_with_configuration_source_provider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.isUsedWithConfigurationSourceProvider"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#is_used_with_configuration_source_provider ResourcemanagerPrivateEndpoint#is_used_with_configuration_source_provider}.

---

##### `nsg_id_list`<sup>Optional</sup> <a name="nsg_id_list" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.nsgIdList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#nsg_id_list ResourcemanagerPrivateEndpoint#nsg_id_list}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#timeouts ResourcemanagerPrivateEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetDnsZones">reset_dns_zones</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetIsUsedWithConfigurationSourceProvider">reset_is_used_with_configuration_source_provider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetNsgIdList">reset_nsg_id_list</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#create ResourcemanagerPrivateEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#delete ResourcemanagerPrivateEndpoint#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#update ResourcemanagerPrivateEndpoint#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dns_zones` <a name="reset_dns_zones" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetDnsZones"></a>

```python
def reset_dns_zones() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_used_with_configuration_source_provider` <a name="reset_is_used_with_configuration_source_provider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetIsUsedWithConfigurationSourceProvider"></a>

```python
def reset_is_used_with_configuration_source_provider() -> None
```

##### `reset_nsg_id_list` <a name="reset_nsg_id_list" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetNsgIdList"></a>

```python
def reset_nsg_id_list() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ResourcemanagerPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import resourcemanager_private_endpoint

resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import resourcemanager_private_endpoint

resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import resourcemanager_private_endpoint

resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import resourcemanager_private_endpoint

resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ResourcemanagerPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ResourcemanagerPrivateEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ResourcemanagerPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ResourcemanagerPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.sourceIps">source_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference">ResourcemanagerPrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.dnsZonesInput">dns_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.isUsedWithConfigurationSourceProviderInput">is_used_with_configuration_source_provider_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.nsgIdListInput">nsg_id_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.vcnIdInput">vcn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.dnsZones">dns_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.isUsedWithConfigurationSourceProvider">is_used_with_configuration_source_provider</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.nsgIdList">nsg_id_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `source_ips`<sup>Required</sup> <a name="source_ips" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.sourceIps"></a>

```python
source_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.timeouts"></a>

```python
timeouts: ResourcemanagerPrivateEndpointTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference">ResourcemanagerPrivateEndpointTimeoutsOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `dns_zones_input`<sup>Optional</sup> <a name="dns_zones_input" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.dnsZonesInput"></a>

```python
dns_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_used_with_configuration_source_provider_input`<sup>Optional</sup> <a name="is_used_with_configuration_source_provider_input" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.isUsedWithConfigurationSourceProviderInput"></a>

```python
is_used_with_configuration_source_provider_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nsg_id_list_input`<sup>Optional</sup> <a name="nsg_id_list_input" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.nsgIdListInput"></a>

```python
nsg_id_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ResourcemanagerPrivateEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a>]

---

##### `vcn_id_input`<sup>Optional</sup> <a name="vcn_id_input" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.vcnIdInput"></a>

```python
vcn_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dns_zones`<sup>Required</sup> <a name="dns_zones" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.dnsZones"></a>

```python
dns_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_used_with_configuration_source_provider`<sup>Required</sup> <a name="is_used_with_configuration_source_provider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.isUsedWithConfigurationSourceProvider"></a>

```python
is_used_with_configuration_source_provider: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nsg_id_list`<sup>Required</sup> <a name="nsg_id_list" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.nsgIdList"></a>

```python
nsg_id_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ResourcemanagerPrivateEndpointConfig <a name="ResourcemanagerPrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import resourcemanager_private_endpoint

resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  subnet_id: str,
  vcn_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  dns_zones: typing.List[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_used_with_configuration_source_provider: typing.Union[bool, IResolvable] = None,
  nsg_id_list: typing.List[str] = None,
  timeouts: ResourcemanagerPrivateEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#compartment_id ResourcemanagerPrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#display_name ResourcemanagerPrivateEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#subnet_id ResourcemanagerPrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#vcn_id ResourcemanagerPrivateEndpoint#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#defined_tags ResourcemanagerPrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#description ResourcemanagerPrivateEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.dnsZones">dns_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#dns_zones ResourcemanagerPrivateEndpoint#dns_zones}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#freeform_tags ResourcemanagerPrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#id ResourcemanagerPrivateEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.isUsedWithConfigurationSourceProvider">is_used_with_configuration_source_provider</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#is_used_with_configuration_source_provider ResourcemanagerPrivateEndpoint#is_used_with_configuration_source_provider}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.nsgIdList">nsg_id_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#nsg_id_list ResourcemanagerPrivateEndpoint#nsg_id_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#compartment_id ResourcemanagerPrivateEndpoint#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#display_name ResourcemanagerPrivateEndpoint#display_name}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#subnet_id ResourcemanagerPrivateEndpoint#subnet_id}.

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#vcn_id ResourcemanagerPrivateEndpoint#vcn_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#defined_tags ResourcemanagerPrivateEndpoint#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#description ResourcemanagerPrivateEndpoint#description}.

---

##### `dns_zones`<sup>Optional</sup> <a name="dns_zones" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.dnsZones"></a>

```python
dns_zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#dns_zones ResourcemanagerPrivateEndpoint#dns_zones}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#freeform_tags ResourcemanagerPrivateEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#id ResourcemanagerPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_used_with_configuration_source_provider`<sup>Optional</sup> <a name="is_used_with_configuration_source_provider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.isUsedWithConfigurationSourceProvider"></a>

```python
is_used_with_configuration_source_provider: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#is_used_with_configuration_source_provider ResourcemanagerPrivateEndpoint#is_used_with_configuration_source_provider}.

---

##### `nsg_id_list`<sup>Optional</sup> <a name="nsg_id_list" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.nsgIdList"></a>

```python
nsg_id_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#nsg_id_list ResourcemanagerPrivateEndpoint#nsg_id_list}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.timeouts"></a>

```python
timeouts: ResourcemanagerPrivateEndpointTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#timeouts ResourcemanagerPrivateEndpoint#timeouts}

---

### ResourcemanagerPrivateEndpointTimeouts <a name="ResourcemanagerPrivateEndpointTimeouts" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import resourcemanager_private_endpoint

resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#create ResourcemanagerPrivateEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#delete ResourcemanagerPrivateEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#update ResourcemanagerPrivateEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#create ResourcemanagerPrivateEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#delete ResourcemanagerPrivateEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#update ResourcemanagerPrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourcemanagerPrivateEndpointTimeoutsOutputReference <a name="ResourcemanagerPrivateEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import resourcemanager_private_endpoint

resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourcemanagerPrivateEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a>]

---



