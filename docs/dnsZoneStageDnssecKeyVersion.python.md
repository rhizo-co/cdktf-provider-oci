# `dnsZoneStageDnssecKeyVersion` Submodule <a name="`dnsZoneStageDnssecKeyVersion` Submodule" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsZoneStageDnssecKeyVersion <a name="DnsZoneStageDnssecKeyVersion" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version oci_dns_zone_stage_dnssec_key_version}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_zone_stage_dnssec_key_version

dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  predecessor_dnssec_key_version_uuid: str,
  zone_id: str,
  id: str = None,
  scope: str = None,
  timeouts: DnsZoneStageDnssecKeyVersionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.predecessorDnssecKeyVersionUuid">predecessor_dnssec_key_version_uuid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#predecessor_dnssec_key_version_uuid DnsZoneStageDnssecKeyVersion#predecessor_dnssec_key_version_uuid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#zone_id DnsZoneStageDnssecKeyVersion#zone_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#id DnsZoneStageDnssecKeyVersion#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#scope DnsZoneStageDnssecKeyVersion#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts">DnsZoneStageDnssecKeyVersionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `predecessor_dnssec_key_version_uuid`<sup>Required</sup> <a name="predecessor_dnssec_key_version_uuid" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.predecessorDnssecKeyVersionUuid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#predecessor_dnssec_key_version_uuid DnsZoneStageDnssecKeyVersion#predecessor_dnssec_key_version_uuid}.

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.zoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#zone_id DnsZoneStageDnssecKeyVersion#zone_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#id DnsZoneStageDnssecKeyVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#scope DnsZoneStageDnssecKeyVersion#scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts">DnsZoneStageDnssecKeyVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#timeouts DnsZoneStageDnssecKeyVersion#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#create DnsZoneStageDnssecKeyVersion#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#delete DnsZoneStageDnssecKeyVersion#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#update DnsZoneStageDnssecKeyVersion#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_scope` <a name="reset_scope" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DnsZoneStageDnssecKeyVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_zone_stage_dnssec_key_version

dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_zone_stage_dnssec_key_version

dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_zone_stage_dnssec_key_version

dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_zone_stage_dnssec_key_version

dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DnsZoneStageDnssecKeyVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DnsZoneStageDnssecKeyVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DnsZoneStageDnssecKeyVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DnsZoneStageDnssecKeyVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference">DnsZoneStageDnssecKeyVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.predecessorDnssecKeyVersionUuidInput">predecessor_dnssec_key_version_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts">DnsZoneStageDnssecKeyVersionTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.predecessorDnssecKeyVersionUuid">predecessor_dnssec_key_version_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.timeouts"></a>

```python
timeouts: DnsZoneStageDnssecKeyVersionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference">DnsZoneStageDnssecKeyVersionTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `predecessor_dnssec_key_version_uuid_input`<sup>Optional</sup> <a name="predecessor_dnssec_key_version_uuid_input" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.predecessorDnssecKeyVersionUuidInput"></a>

```python
predecessor_dnssec_key_version_uuid_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DnsZoneStageDnssecKeyVersionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts">DnsZoneStageDnssecKeyVersionTimeouts</a>]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `predecessor_dnssec_key_version_uuid`<sup>Required</sup> <a name="predecessor_dnssec_key_version_uuid" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.predecessorDnssecKeyVersionUuid"></a>

```python
predecessor_dnssec_key_version_uuid: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DnsZoneStageDnssecKeyVersionConfig <a name="DnsZoneStageDnssecKeyVersionConfig" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_zone_stage_dnssec_key_version

dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  predecessor_dnssec_key_version_uuid: str,
  zone_id: str,
  id: str = None,
  scope: str = None,
  timeouts: DnsZoneStageDnssecKeyVersionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.predecessorDnssecKeyVersionUuid">predecessor_dnssec_key_version_uuid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#predecessor_dnssec_key_version_uuid DnsZoneStageDnssecKeyVersion#predecessor_dnssec_key_version_uuid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#zone_id DnsZoneStageDnssecKeyVersion#zone_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#id DnsZoneStageDnssecKeyVersion#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#scope DnsZoneStageDnssecKeyVersion#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts">DnsZoneStageDnssecKeyVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `predecessor_dnssec_key_version_uuid`<sup>Required</sup> <a name="predecessor_dnssec_key_version_uuid" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.predecessorDnssecKeyVersionUuid"></a>

```python
predecessor_dnssec_key_version_uuid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#predecessor_dnssec_key_version_uuid DnsZoneStageDnssecKeyVersion#predecessor_dnssec_key_version_uuid}.

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#zone_id DnsZoneStageDnssecKeyVersion#zone_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#id DnsZoneStageDnssecKeyVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#scope DnsZoneStageDnssecKeyVersion#scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.timeouts"></a>

```python
timeouts: DnsZoneStageDnssecKeyVersionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts">DnsZoneStageDnssecKeyVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#timeouts DnsZoneStageDnssecKeyVersion#timeouts}

---

### DnsZoneStageDnssecKeyVersionTimeouts <a name="DnsZoneStageDnssecKeyVersionTimeouts" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_zone_stage_dnssec_key_version

dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#create DnsZoneStageDnssecKeyVersion#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#delete DnsZoneStageDnssecKeyVersion#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#update DnsZoneStageDnssecKeyVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#create DnsZoneStageDnssecKeyVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#delete DnsZoneStageDnssecKeyVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#update DnsZoneStageDnssecKeyVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsZoneStageDnssecKeyVersionTimeoutsOutputReference <a name="DnsZoneStageDnssecKeyVersionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dns_zone_stage_dnssec_key_version

dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts">DnsZoneStageDnssecKeyVersionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsZoneStageDnssecKeyVersionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts">DnsZoneStageDnssecKeyVersionTimeouts</a>]

---



