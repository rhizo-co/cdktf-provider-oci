# `jmsJavaDownloadsJavaLicenseAcceptanceRecord` Submodule <a name="`jmsJavaDownloadsJavaLicenseAcceptanceRecord` Submodule" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JmsJavaDownloadsJavaLicenseAcceptanceRecord <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecord" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record oci_jms_java_downloads_java_license_acceptance_record}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_license_acceptance_record

jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord(
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
  license_acceptance_status: str,
  license_type: str,
  defined_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#compartment_id JmsJavaDownloadsJavaLicenseAcceptanceRecord#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.licenseAcceptanceStatus">license_acceptance_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#license_acceptance_status JmsJavaDownloadsJavaLicenseAcceptanceRecord#license_acceptance_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.licenseType">license_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#license_type JmsJavaDownloadsJavaLicenseAcceptanceRecord#license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#defined_tags JmsJavaDownloadsJavaLicenseAcceptanceRecord#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#id JmsJavaDownloadsJavaLicenseAcceptanceRecord#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#compartment_id JmsJavaDownloadsJavaLicenseAcceptanceRecord#compartment_id}.

---

##### `license_acceptance_status`<sup>Required</sup> <a name="license_acceptance_status" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.licenseAcceptanceStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#license_acceptance_status JmsJavaDownloadsJavaLicenseAcceptanceRecord#license_acceptance_status}.

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.licenseType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#license_type JmsJavaDownloadsJavaLicenseAcceptanceRecord#license_type}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#defined_tags JmsJavaDownloadsJavaLicenseAcceptanceRecord#defined_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#id JmsJavaDownloadsJavaLicenseAcceptanceRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#timeouts JmsJavaDownloadsJavaLicenseAcceptanceRecord#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#create JmsJavaDownloadsJavaLicenseAcceptanceRecord#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#delete JmsJavaDownloadsJavaLicenseAcceptanceRecord#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#update JmsJavaDownloadsJavaLicenseAcceptanceRecord#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a JmsJavaDownloadsJavaLicenseAcceptanceRecord resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_license_acceptance_record

jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_license_acceptance_record

jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_license_acceptance_record

jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_license_acceptance_record

jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a JmsJavaDownloadsJavaLicenseAcceptanceRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the JmsJavaDownloadsJavaLicenseAcceptanceRecord to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing JmsJavaDownloadsJavaLicenseAcceptanceRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the JmsJavaDownloadsJavaLicenseAcceptanceRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.createdBy">created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList">JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.lastUpdatedBy">last_updated_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList">JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.timeAccepted">time_accepted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.timeLastUpdated">time_last_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.licenseAcceptanceStatusInput">license_acceptance_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.licenseTypeInput">license_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.licenseAcceptanceStatus">license_acceptance_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.licenseType">license_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.createdBy"></a>

```python
created_by: JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList">JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `last_updated_by`<sup>Required</sup> <a name="last_updated_by" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.lastUpdatedBy"></a>

```python
last_updated_by: JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList">JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_accepted`<sup>Required</sup> <a name="time_accepted" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.timeAccepted"></a>

```python
time_accepted: str
```

- *Type:* str

---

##### `time_last_updated`<sup>Required</sup> <a name="time_last_updated" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.timeLastUpdated"></a>

```python
time_last_updated: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.timeouts"></a>

```python
timeouts: JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `license_acceptance_status_input`<sup>Optional</sup> <a name="license_acceptance_status_input" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.licenseAcceptanceStatusInput"></a>

```python
license_acceptance_status_input: str
```

- *Type:* str

---

##### `license_type_input`<sup>Optional</sup> <a name="license_type_input" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.licenseTypeInput"></a>

```python
license_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `license_acceptance_status`<sup>Required</sup> <a name="license_acceptance_status" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.licenseAcceptanceStatus"></a>

```python
license_acceptance_status: str
```

- *Type:* str

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_license_acceptance_record

jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  license_acceptance_status: str,
  license_type: str,
  defined_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#compartment_id JmsJavaDownloadsJavaLicenseAcceptanceRecord#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.licenseAcceptanceStatus">license_acceptance_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#license_acceptance_status JmsJavaDownloadsJavaLicenseAcceptanceRecord#license_acceptance_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.licenseType">license_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#license_type JmsJavaDownloadsJavaLicenseAcceptanceRecord#license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#defined_tags JmsJavaDownloadsJavaLicenseAcceptanceRecord#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#id JmsJavaDownloadsJavaLicenseAcceptanceRecord#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#compartment_id JmsJavaDownloadsJavaLicenseAcceptanceRecord#compartment_id}.

---

##### `license_acceptance_status`<sup>Required</sup> <a name="license_acceptance_status" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.licenseAcceptanceStatus"></a>

```python
license_acceptance_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#license_acceptance_status JmsJavaDownloadsJavaLicenseAcceptanceRecord#license_acceptance_status}.

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#license_type JmsJavaDownloadsJavaLicenseAcceptanceRecord#license_type}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#defined_tags JmsJavaDownloadsJavaLicenseAcceptanceRecord#defined_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#id JmsJavaDownloadsJavaLicenseAcceptanceRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.timeouts"></a>

```python
timeouts: JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#timeouts JmsJavaDownloadsJavaLicenseAcceptanceRecord#timeouts}

---

### JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_license_acceptance_record

jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy()
```


### JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_license_acceptance_record

jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy()
```


### JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_license_acceptance_record

jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#create JmsJavaDownloadsJavaLicenseAcceptanceRecord#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#delete JmsJavaDownloadsJavaLicenseAcceptanceRecord#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#update JmsJavaDownloadsJavaLicenseAcceptanceRecord#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#create JmsJavaDownloadsJavaLicenseAcceptanceRecord#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#delete JmsJavaDownloadsJavaLicenseAcceptanceRecord#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#update JmsJavaDownloadsJavaLicenseAcceptanceRecord#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_license_acceptance_record

jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_license_acceptance_record

jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy">JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy">JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy</a>

---


### JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_license_acceptance_record

jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_license_acceptance_record

jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy">JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.internalValue"></a>

```python
internal_value: JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy">JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy</a>

---


### JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_license_acceptance_record

jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts</a>]

---



