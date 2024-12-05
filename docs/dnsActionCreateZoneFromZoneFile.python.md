# `dnsActionCreateZoneFromZoneFile` Submodule <a name="`dnsActionCreateZoneFromZoneFile` Submodule" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsActionCreateZoneFromZoneFile <a name="DnsActionCreateZoneFromZoneFile" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file oci_dns_action_create_zone_from_zone_file}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile(
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
  create_zone_from_zone_file_details: str,
  id: str = None,
  scope: str = None,
  timeouts: DnsActionCreateZoneFromZoneFileTimeouts = None,
  view_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#compartment_id DnsActionCreateZoneFromZoneFile#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.createZoneFromZoneFileDetails">create_zone_from_zone_file_details</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#create_zone_from_zone_file_details DnsActionCreateZoneFromZoneFile#create_zone_from_zone_file_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#id DnsActionCreateZoneFromZoneFile#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#scope DnsActionCreateZoneFromZoneFile#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts">DnsActionCreateZoneFromZoneFileTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.viewId">view_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#view_id DnsActionCreateZoneFromZoneFile#view_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#compartment_id DnsActionCreateZoneFromZoneFile#compartment_id}.

---

##### `create_zone_from_zone_file_details`<sup>Required</sup> <a name="create_zone_from_zone_file_details" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.createZoneFromZoneFileDetails"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#create_zone_from_zone_file_details DnsActionCreateZoneFromZoneFile#create_zone_from_zone_file_details}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#id DnsActionCreateZoneFromZoneFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#scope DnsActionCreateZoneFromZoneFile#scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts">DnsActionCreateZoneFromZoneFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#timeouts DnsActionCreateZoneFromZoneFile#timeouts}

---

##### `view_id`<sup>Optional</sup> <a name="view_id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.viewId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#view_id DnsActionCreateZoneFromZoneFile#view_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetViewId">reset_view_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#create DnsActionCreateZoneFromZoneFile#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#delete DnsActionCreateZoneFromZoneFile#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#update DnsActionCreateZoneFromZoneFile#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_scope` <a name="reset_scope" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_view_id` <a name="reset_view_id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetViewId"></a>

```python
def reset_view_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DnsActionCreateZoneFromZoneFile resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DnsActionCreateZoneFromZoneFile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DnsActionCreateZoneFromZoneFile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DnsActionCreateZoneFromZoneFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DnsActionCreateZoneFromZoneFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.dnssecConfig">dnssec_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList">DnsActionCreateZoneFromZoneFileDnssecConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.dnssecState">dnssec_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.externalDownstreams">external_downstreams</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList">DnsActionCreateZoneFromZoneFileExternalDownstreamsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.externalMasters">external_masters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList">DnsActionCreateZoneFromZoneFileExternalMastersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.isProtected">is_protected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.nameservers">nameservers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList">DnsActionCreateZoneFromZoneFileNameserversList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.selfAttribute">self_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.serial">serial</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference">DnsActionCreateZoneFromZoneFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.zoneTransferServers">zone_transfer_servers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList">DnsActionCreateZoneFromZoneFileZoneTransferServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.zoneType">zone_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.createZoneFromZoneFileDetailsInput">create_zone_from_zone_file_details_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts">DnsActionCreateZoneFromZoneFileTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.viewIdInput">view_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.createZoneFromZoneFileDetails">create_zone_from_zone_file_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.viewId">view_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `dnssec_config`<sup>Required</sup> <a name="dnssec_config" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.dnssecConfig"></a>

```python
dnssec_config: DnsActionCreateZoneFromZoneFileDnssecConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList">DnsActionCreateZoneFromZoneFileDnssecConfigList</a>

---

##### `dnssec_state`<sup>Required</sup> <a name="dnssec_state" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.dnssecState"></a>

```python
dnssec_state: str
```

- *Type:* str

---

##### `external_downstreams`<sup>Required</sup> <a name="external_downstreams" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.externalDownstreams"></a>

```python
external_downstreams: DnsActionCreateZoneFromZoneFileExternalDownstreamsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList">DnsActionCreateZoneFromZoneFileExternalDownstreamsList</a>

---

##### `external_masters`<sup>Required</sup> <a name="external_masters" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.externalMasters"></a>

```python
external_masters: DnsActionCreateZoneFromZoneFileExternalMastersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList">DnsActionCreateZoneFromZoneFileExternalMastersList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `is_protected`<sup>Required</sup> <a name="is_protected" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.isProtected"></a>

```python
is_protected: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.nameservers"></a>

```python
nameservers: DnsActionCreateZoneFromZoneFileNameserversList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList">DnsActionCreateZoneFromZoneFileNameserversList</a>

---

##### `self_attribute`<sup>Required</sup> <a name="self_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.selfAttribute"></a>

```python
self_attribute: str
```

- *Type:* str

---

##### `serial`<sup>Required</sup> <a name="serial" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.serial"></a>

```python
serial: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.timeouts"></a>

```python
timeouts: DnsActionCreateZoneFromZoneFileTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference">DnsActionCreateZoneFromZoneFileTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `zone_transfer_servers`<sup>Required</sup> <a name="zone_transfer_servers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.zoneTransferServers"></a>

```python
zone_transfer_servers: DnsActionCreateZoneFromZoneFileZoneTransferServersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList">DnsActionCreateZoneFromZoneFileZoneTransferServersList</a>

---

##### `zone_type`<sup>Required</sup> <a name="zone_type" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.zoneType"></a>

```python
zone_type: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `create_zone_from_zone_file_details_input`<sup>Optional</sup> <a name="create_zone_from_zone_file_details_input" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.createZoneFromZoneFileDetailsInput"></a>

```python
create_zone_from_zone_file_details_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DnsActionCreateZoneFromZoneFileTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts">DnsActionCreateZoneFromZoneFileTimeouts</a>]

---

##### `view_id_input`<sup>Optional</sup> <a name="view_id_input" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.viewIdInput"></a>

```python
view_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `create_zone_from_zone_file_details`<sup>Required</sup> <a name="create_zone_from_zone_file_details" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.createZoneFromZoneFileDetails"></a>

```python
create_zone_from_zone_file_details: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `view_id`<sup>Required</sup> <a name="view_id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.viewId"></a>

```python
view_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DnsActionCreateZoneFromZoneFileConfig <a name="DnsActionCreateZoneFromZoneFileConfig" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  create_zone_from_zone_file_details: str,
  id: str = None,
  scope: str = None,
  timeouts: DnsActionCreateZoneFromZoneFileTimeouts = None,
  view_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#compartment_id DnsActionCreateZoneFromZoneFile#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.createZoneFromZoneFileDetails">create_zone_from_zone_file_details</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#create_zone_from_zone_file_details DnsActionCreateZoneFromZoneFile#create_zone_from_zone_file_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#id DnsActionCreateZoneFromZoneFile#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#scope DnsActionCreateZoneFromZoneFile#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts">DnsActionCreateZoneFromZoneFileTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.viewId">view_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#view_id DnsActionCreateZoneFromZoneFile#view_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#compartment_id DnsActionCreateZoneFromZoneFile#compartment_id}.

---

##### `create_zone_from_zone_file_details`<sup>Required</sup> <a name="create_zone_from_zone_file_details" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.createZoneFromZoneFileDetails"></a>

```python
create_zone_from_zone_file_details: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#create_zone_from_zone_file_details DnsActionCreateZoneFromZoneFile#create_zone_from_zone_file_details}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#id DnsActionCreateZoneFromZoneFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#scope DnsActionCreateZoneFromZoneFile#scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.timeouts"></a>

```python
timeouts: DnsActionCreateZoneFromZoneFileTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts">DnsActionCreateZoneFromZoneFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#timeouts DnsActionCreateZoneFromZoneFile#timeouts}

---

##### `view_id`<sup>Optional</sup> <a name="view_id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.viewId"></a>

```python
view_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#view_id DnsActionCreateZoneFromZoneFile#view_id}.

---

### DnsActionCreateZoneFromZoneFileDnssecConfig <a name="DnsActionCreateZoneFromZoneFileDnssecConfig" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfig()
```


### DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions <a name="DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions()
```


### DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData <a name="DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData()
```


### DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions <a name="DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions()
```


### DnsActionCreateZoneFromZoneFileExternalDownstreams <a name="DnsActionCreateZoneFromZoneFileExternalDownstreams" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreams.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreams()
```


### DnsActionCreateZoneFromZoneFileExternalMasters <a name="DnsActionCreateZoneFromZoneFileExternalMasters" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMasters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMasters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMasters()
```


### DnsActionCreateZoneFromZoneFileNameservers <a name="DnsActionCreateZoneFromZoneFileNameservers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameservers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameservers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameservers()
```


### DnsActionCreateZoneFromZoneFileTimeouts <a name="DnsActionCreateZoneFromZoneFileTimeouts" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#create DnsActionCreateZoneFromZoneFile#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#delete DnsActionCreateZoneFromZoneFile#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#update DnsActionCreateZoneFromZoneFile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#create DnsActionCreateZoneFromZoneFile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#delete DnsActionCreateZoneFromZoneFile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#update DnsActionCreateZoneFromZoneFile#update}.

---

### DnsActionCreateZoneFromZoneFileZoneTransferServers <a name="DnsActionCreateZoneFromZoneFileZoneTransferServers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServers()
```


## Classes <a name="Classes" id="Classes"></a>

### DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList <a name="DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference <a name="DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.digestType">digest_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.rdata">rdata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData">DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `digest_type`<sup>Required</sup> <a name="digest_type" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.digestType"></a>

```python
digest_type: str
```

- *Type:* str

---

##### `rdata`<sup>Required</sup> <a name="rdata" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.rdata"></a>

```python
rdata: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.internalValue"></a>

```python
internal_value: DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData">DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData</a>

---


### DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList <a name="DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference <a name="DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.dsData">ds_data</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList">DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.keyTag">key_tag</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.lengthInBytes">length_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.predecessorDnssecKeyVersionUuid">predecessor_dnssec_key_version_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.successorDnssecKeyVersionUuid">successor_dnssec_key_version_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeActivated">time_activated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeExpired">time_expired</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeInactivated">time_inactivated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timePromoted">time_promoted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timePublished">time_published</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeUnpublished">time_unpublished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions">DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `ds_data`<sup>Required</sup> <a name="ds_data" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.dsData"></a>

```python
ds_data: DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList">DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList</a>

---

##### `key_tag`<sup>Required</sup> <a name="key_tag" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.keyTag"></a>

```python
key_tag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `length_in_bytes`<sup>Required</sup> <a name="length_in_bytes" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.lengthInBytes"></a>

```python
length_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `predecessor_dnssec_key_version_uuid`<sup>Required</sup> <a name="predecessor_dnssec_key_version_uuid" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.predecessorDnssecKeyVersionUuid"></a>

```python
predecessor_dnssec_key_version_uuid: str
```

- *Type:* str

---

##### `successor_dnssec_key_version_uuid`<sup>Required</sup> <a name="successor_dnssec_key_version_uuid" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.successorDnssecKeyVersionUuid"></a>

```python
successor_dnssec_key_version_uuid: str
```

- *Type:* str

---

##### `time_activated`<sup>Required</sup> <a name="time_activated" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeActivated"></a>

```python
time_activated: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_expired`<sup>Required</sup> <a name="time_expired" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeExpired"></a>

```python
time_expired: str
```

- *Type:* str

---

##### `time_inactivated`<sup>Required</sup> <a name="time_inactivated" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeInactivated"></a>

```python
time_inactivated: str
```

- *Type:* str

---

##### `time_promoted`<sup>Required</sup> <a name="time_promoted" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timePromoted"></a>

```python
time_promoted: str
```

- *Type:* str

---

##### `time_published`<sup>Required</sup> <a name="time_published" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timePublished"></a>

```python
time_published: str
```

- *Type:* str

---

##### `time_unpublished`<sup>Required</sup> <a name="time_unpublished" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeUnpublished"></a>

```python
time_unpublished: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.internalValue"></a>

```python
internal_value: DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions">DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions</a>

---


### DnsActionCreateZoneFromZoneFileDnssecConfigList <a name="DnsActionCreateZoneFromZoneFileDnssecConfigList" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference <a name="DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.kskDnssecKeyVersions">ksk_dnssec_key_versions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList">DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.zskDnssecKeyVersions">zsk_dnssec_key_versions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList">DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfig">DnsActionCreateZoneFromZoneFileDnssecConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ksk_dnssec_key_versions`<sup>Required</sup> <a name="ksk_dnssec_key_versions" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.kskDnssecKeyVersions"></a>

```python
ksk_dnssec_key_versions: DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList">DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList</a>

---

##### `zsk_dnssec_key_versions`<sup>Required</sup> <a name="zsk_dnssec_key_versions" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.zskDnssecKeyVersions"></a>

```python
zsk_dnssec_key_versions: DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList">DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.internalValue"></a>

```python
internal_value: DnsActionCreateZoneFromZoneFileDnssecConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfig">DnsActionCreateZoneFromZoneFileDnssecConfig</a>

---


### DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList <a name="DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference <a name="DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.keyTag">key_tag</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.lengthInBytes">length_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.predecessorDnssecKeyVersionUuid">predecessor_dnssec_key_version_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.successorDnssecKeyVersionUuid">successor_dnssec_key_version_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeActivated">time_activated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeExpired">time_expired</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeInactivated">time_inactivated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timePromoted">time_promoted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timePublished">time_published</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeUnpublished">time_unpublished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions">DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `key_tag`<sup>Required</sup> <a name="key_tag" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.keyTag"></a>

```python
key_tag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `length_in_bytes`<sup>Required</sup> <a name="length_in_bytes" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.lengthInBytes"></a>

```python
length_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `predecessor_dnssec_key_version_uuid`<sup>Required</sup> <a name="predecessor_dnssec_key_version_uuid" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.predecessorDnssecKeyVersionUuid"></a>

```python
predecessor_dnssec_key_version_uuid: str
```

- *Type:* str

---

##### `successor_dnssec_key_version_uuid`<sup>Required</sup> <a name="successor_dnssec_key_version_uuid" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.successorDnssecKeyVersionUuid"></a>

```python
successor_dnssec_key_version_uuid: str
```

- *Type:* str

---

##### `time_activated`<sup>Required</sup> <a name="time_activated" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeActivated"></a>

```python
time_activated: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_expired`<sup>Required</sup> <a name="time_expired" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeExpired"></a>

```python
time_expired: str
```

- *Type:* str

---

##### `time_inactivated`<sup>Required</sup> <a name="time_inactivated" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeInactivated"></a>

```python
time_inactivated: str
```

- *Type:* str

---

##### `time_promoted`<sup>Required</sup> <a name="time_promoted" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timePromoted"></a>

```python
time_promoted: str
```

- *Type:* str

---

##### `time_published`<sup>Required</sup> <a name="time_published" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timePublished"></a>

```python
time_published: str
```

- *Type:* str

---

##### `time_unpublished`<sup>Required</sup> <a name="time_unpublished" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeUnpublished"></a>

```python
time_unpublished: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.internalValue"></a>

```python
internal_value: DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions">DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions</a>

---


### DnsActionCreateZoneFromZoneFileExternalDownstreamsList <a name="DnsActionCreateZoneFromZoneFileExternalDownstreamsList" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference <a name="DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.tsigKeyId">tsig_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreams">DnsActionCreateZoneFromZoneFileExternalDownstreams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tsig_key_id`<sup>Required</sup> <a name="tsig_key_id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.tsigKeyId"></a>

```python
tsig_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.internalValue"></a>

```python
internal_value: DnsActionCreateZoneFromZoneFileExternalDownstreams
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreams">DnsActionCreateZoneFromZoneFileExternalDownstreams</a>

---


### DnsActionCreateZoneFromZoneFileExternalMastersList <a name="DnsActionCreateZoneFromZoneFileExternalMastersList" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DnsActionCreateZoneFromZoneFileExternalMastersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DnsActionCreateZoneFromZoneFileExternalMastersOutputReference <a name="DnsActionCreateZoneFromZoneFileExternalMastersOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.tsigKeyId">tsig_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMasters">DnsActionCreateZoneFromZoneFileExternalMasters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tsig_key_id`<sup>Required</sup> <a name="tsig_key_id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.tsigKeyId"></a>

```python
tsig_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.internalValue"></a>

```python
internal_value: DnsActionCreateZoneFromZoneFileExternalMasters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMasters">DnsActionCreateZoneFromZoneFileExternalMasters</a>

---


### DnsActionCreateZoneFromZoneFileNameserversList <a name="DnsActionCreateZoneFromZoneFileNameserversList" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DnsActionCreateZoneFromZoneFileNameserversOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DnsActionCreateZoneFromZoneFileNameserversOutputReference <a name="DnsActionCreateZoneFromZoneFileNameserversOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameservers">DnsActionCreateZoneFromZoneFileNameservers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.property.internalValue"></a>

```python
internal_value: DnsActionCreateZoneFromZoneFileNameservers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameservers">DnsActionCreateZoneFromZoneFileNameservers</a>

---


### DnsActionCreateZoneFromZoneFileTimeoutsOutputReference <a name="DnsActionCreateZoneFromZoneFileTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts">DnsActionCreateZoneFromZoneFileTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsActionCreateZoneFromZoneFileTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts">DnsActionCreateZoneFromZoneFileTimeouts</a>]

---


### DnsActionCreateZoneFromZoneFileZoneTransferServersList <a name="DnsActionCreateZoneFromZoneFileZoneTransferServersList" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference <a name="DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_action_create_zone_from_zone_file

dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.isTransferDestination">is_transfer_destination</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.isTransferSource">is_transfer_source</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServers">DnsActionCreateZoneFromZoneFileZoneTransferServers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `is_transfer_destination`<sup>Required</sup> <a name="is_transfer_destination" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.isTransferDestination"></a>

```python
is_transfer_destination: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_transfer_source`<sup>Required</sup> <a name="is_transfer_source" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.isTransferSource"></a>

```python
is_transfer_source: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.internalValue"></a>

```python
internal_value: DnsActionCreateZoneFromZoneFileZoneTransferServers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServers">DnsActionCreateZoneFromZoneFileZoneTransferServers</a>

---



