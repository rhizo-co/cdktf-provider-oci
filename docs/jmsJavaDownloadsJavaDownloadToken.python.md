# `jmsJavaDownloadsJavaDownloadToken` Submodule <a name="`jmsJavaDownloadsJavaDownloadToken` Submodule" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JmsJavaDownloadsJavaDownloadToken <a name="JmsJavaDownloadsJavaDownloadToken" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token oci_jms_java_downloads_java_download_token}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_download_token

jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken(
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
  description: str,
  display_name: str,
  java_version: str,
  license_type: typing.List[str],
  time_expires: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_default: typing.Union[bool, IResolvable] = None,
  timeouts: JmsJavaDownloadsJavaDownloadTokenTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#compartment_id JmsJavaDownloadsJavaDownloadToken#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#description JmsJavaDownloadsJavaDownloadToken#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#display_name JmsJavaDownloadsJavaDownloadToken#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.javaVersion">java_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#java_version JmsJavaDownloadsJavaDownloadToken#java_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.licenseType">license_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#license_type JmsJavaDownloadsJavaDownloadToken#license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.timeExpires">time_expires</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#time_expires JmsJavaDownloadsJavaDownloadToken#time_expires}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#defined_tags JmsJavaDownloadsJavaDownloadToken#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#freeform_tags JmsJavaDownloadsJavaDownloadToken#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#id JmsJavaDownloadsJavaDownloadToken#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#is_default JmsJavaDownloadsJavaDownloadToken#is_default}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts">JmsJavaDownloadsJavaDownloadTokenTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#compartment_id JmsJavaDownloadsJavaDownloadToken#compartment_id}.

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#description JmsJavaDownloadsJavaDownloadToken#description}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#display_name JmsJavaDownloadsJavaDownloadToken#display_name}.

---

##### `java_version`<sup>Required</sup> <a name="java_version" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.javaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#java_version JmsJavaDownloadsJavaDownloadToken#java_version}.

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.licenseType"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#license_type JmsJavaDownloadsJavaDownloadToken#license_type}.

---

##### `time_expires`<sup>Required</sup> <a name="time_expires" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.timeExpires"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#time_expires JmsJavaDownloadsJavaDownloadToken#time_expires}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#defined_tags JmsJavaDownloadsJavaDownloadToken#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#freeform_tags JmsJavaDownloadsJavaDownloadToken#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#id JmsJavaDownloadsJavaDownloadToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_default`<sup>Optional</sup> <a name="is_default" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.isDefault"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#is_default JmsJavaDownloadsJavaDownloadToken#is_default}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts">JmsJavaDownloadsJavaDownloadTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#timeouts JmsJavaDownloadsJavaDownloadToken#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetIsDefault">reset_is_default</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#create JmsJavaDownloadsJavaDownloadToken#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#delete JmsJavaDownloadsJavaDownloadToken#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#update JmsJavaDownloadsJavaDownloadToken#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_default` <a name="reset_is_default" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetIsDefault"></a>

```python
def reset_is_default() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a JmsJavaDownloadsJavaDownloadToken resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_download_token

jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_download_token

jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_download_token

jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_download_token

jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a JmsJavaDownloadsJavaDownloadToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the JmsJavaDownloadsJavaDownloadToken to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing JmsJavaDownloadsJavaDownloadToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the JmsJavaDownloadsJavaDownloadToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.createdBy">created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList">JmsJavaDownloadsJavaDownloadTokenCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.lastUpdatedBy">last_updated_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList">JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeLastUsed">time_last_used</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference">JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.isDefaultInput">is_default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.javaVersionInput">java_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.licenseTypeInput">license_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeExpiresInput">time_expires_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts">JmsJavaDownloadsJavaDownloadTokenTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.javaVersion">java_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.licenseType">license_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeExpires">time_expires</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.createdBy"></a>

```python
created_by: JmsJavaDownloadsJavaDownloadTokenCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList">JmsJavaDownloadsJavaDownloadTokenCreatedByList</a>

---

##### `last_updated_by`<sup>Required</sup> <a name="last_updated_by" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.lastUpdatedBy"></a>

```python
last_updated_by: JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList">JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_used`<sup>Required</sup> <a name="time_last_used" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeLastUsed"></a>

```python
time_last_used: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeouts"></a>

```python
timeouts: JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference">JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_default_input`<sup>Optional</sup> <a name="is_default_input" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.isDefaultInput"></a>

```python
is_default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `java_version_input`<sup>Optional</sup> <a name="java_version_input" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.javaVersionInput"></a>

```python
java_version_input: str
```

- *Type:* str

---

##### `license_type_input`<sup>Optional</sup> <a name="license_type_input" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.licenseTypeInput"></a>

```python
license_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_expires_input`<sup>Optional</sup> <a name="time_expires_input" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeExpiresInput"></a>

```python
time_expires_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, JmsJavaDownloadsJavaDownloadTokenTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts">JmsJavaDownloadsJavaDownloadTokenTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `java_version`<sup>Required</sup> <a name="java_version" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.javaVersion"></a>

```python
java_version: str
```

- *Type:* str

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.licenseType"></a>

```python
license_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_expires`<sup>Required</sup> <a name="time_expires" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeExpires"></a>

```python
time_expires: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### JmsJavaDownloadsJavaDownloadTokenConfig <a name="JmsJavaDownloadsJavaDownloadTokenConfig" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_download_token

jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  description: str,
  display_name: str,
  java_version: str,
  license_type: typing.List[str],
  time_expires: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_default: typing.Union[bool, IResolvable] = None,
  timeouts: JmsJavaDownloadsJavaDownloadTokenTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#compartment_id JmsJavaDownloadsJavaDownloadToken#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#description JmsJavaDownloadsJavaDownloadToken#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#display_name JmsJavaDownloadsJavaDownloadToken#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.javaVersion">java_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#java_version JmsJavaDownloadsJavaDownloadToken#java_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.licenseType">license_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#license_type JmsJavaDownloadsJavaDownloadToken#license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.timeExpires">time_expires</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#time_expires JmsJavaDownloadsJavaDownloadToken#time_expires}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#defined_tags JmsJavaDownloadsJavaDownloadToken#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#freeform_tags JmsJavaDownloadsJavaDownloadToken#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#id JmsJavaDownloadsJavaDownloadToken#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#is_default JmsJavaDownloadsJavaDownloadToken#is_default}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts">JmsJavaDownloadsJavaDownloadTokenTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#compartment_id JmsJavaDownloadsJavaDownloadToken#compartment_id}.

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#description JmsJavaDownloadsJavaDownloadToken#description}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#display_name JmsJavaDownloadsJavaDownloadToken#display_name}.

---

##### `java_version`<sup>Required</sup> <a name="java_version" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.javaVersion"></a>

```python
java_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#java_version JmsJavaDownloadsJavaDownloadToken#java_version}.

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.licenseType"></a>

```python
license_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#license_type JmsJavaDownloadsJavaDownloadToken#license_type}.

---

##### `time_expires`<sup>Required</sup> <a name="time_expires" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.timeExpires"></a>

```python
time_expires: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#time_expires JmsJavaDownloadsJavaDownloadToken#time_expires}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#defined_tags JmsJavaDownloadsJavaDownloadToken#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#freeform_tags JmsJavaDownloadsJavaDownloadToken#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#id JmsJavaDownloadsJavaDownloadToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_default`<sup>Optional</sup> <a name="is_default" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#is_default JmsJavaDownloadsJavaDownloadToken#is_default}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.timeouts"></a>

```python
timeouts: JmsJavaDownloadsJavaDownloadTokenTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts">JmsJavaDownloadsJavaDownloadTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#timeouts JmsJavaDownloadsJavaDownloadToken#timeouts}

---

### JmsJavaDownloadsJavaDownloadTokenCreatedBy <a name="JmsJavaDownloadsJavaDownloadTokenCreatedBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_download_token

jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedBy()
```


### JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy <a name="JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_download_token

jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy()
```


### JmsJavaDownloadsJavaDownloadTokenTimeouts <a name="JmsJavaDownloadsJavaDownloadTokenTimeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_download_token

jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#create JmsJavaDownloadsJavaDownloadToken#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#delete JmsJavaDownloadsJavaDownloadToken#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#update JmsJavaDownloadsJavaDownloadToken#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#create JmsJavaDownloadsJavaDownloadToken#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#delete JmsJavaDownloadsJavaDownloadToken#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#update JmsJavaDownloadsJavaDownloadToken#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### JmsJavaDownloadsJavaDownloadTokenCreatedByList <a name="JmsJavaDownloadsJavaDownloadTokenCreatedByList" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_download_token

jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference <a name="JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_download_token

jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedBy">JmsJavaDownloadsJavaDownloadTokenCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: JmsJavaDownloadsJavaDownloadTokenCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedBy">JmsJavaDownloadsJavaDownloadTokenCreatedBy</a>

---


### JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList <a name="JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_download_token

jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference <a name="JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_download_token

jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy">JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.internalValue"></a>

```python
internal_value: JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy">JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy</a>

---


### JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference <a name="JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import jms_java_downloads_java_download_token

jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts">JmsJavaDownloadsJavaDownloadTokenTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, JmsJavaDownloadsJavaDownloadTokenTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts">JmsJavaDownloadsJavaDownloadTokenTimeouts</a>]

---



