# `dataOciJmsJavaReleases` Submodule <a name="`dataOciJmsJavaReleases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsJavaReleases <a name="DataOciJmsJavaReleases" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases oci_jms_java_releases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleases(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  family_version: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciJmsJavaReleasesFilter]] = None,
  id: str = None,
  jre_security_status: str = None,
  license_type: str = None,
  release_type: str = None,
  release_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.familyVersion">family_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#family_version DataOciJmsJavaReleases#family_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter">DataOciJmsJavaReleasesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#id DataOciJmsJavaReleases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.jreSecurityStatus">jre_security_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#jre_security_status DataOciJmsJavaReleases#jre_security_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.licenseType">license_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#license_type DataOciJmsJavaReleases#license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.releaseType">release_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#release_type DataOciJmsJavaReleases#release_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.releaseVersion">release_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#release_version DataOciJmsJavaReleases#release_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `family_version`<sup>Optional</sup> <a name="family_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.familyVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#family_version DataOciJmsJavaReleases#family_version}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter">DataOciJmsJavaReleasesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#filter DataOciJmsJavaReleases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#id DataOciJmsJavaReleases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jre_security_status`<sup>Optional</sup> <a name="jre_security_status" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.jreSecurityStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#jre_security_status DataOciJmsJavaReleases#jre_security_status}.

---

##### `license_type`<sup>Optional</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.licenseType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#license_type DataOciJmsJavaReleases#license_type}.

---

##### `release_type`<sup>Optional</sup> <a name="release_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.releaseType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#release_type DataOciJmsJavaReleases#release_type}.

---

##### `release_version`<sup>Optional</sup> <a name="release_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.releaseVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#release_version DataOciJmsJavaReleases#release_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetFamilyVersion">reset_family_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetJreSecurityStatus">reset_jre_security_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetLicenseType">reset_license_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetReleaseType">reset_release_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetReleaseVersion">reset_release_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciJmsJavaReleasesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter">DataOciJmsJavaReleasesFilter</a>]]

---

##### `reset_family_version` <a name="reset_family_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetFamilyVersion"></a>

```python
def reset_family_version() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_jre_security_status` <a name="reset_jre_security_status" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetJreSecurityStatus"></a>

```python
def reset_jre_security_status() -> None
```

##### `reset_license_type` <a name="reset_license_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetLicenseType"></a>

```python
def reset_license_type() -> None
```

##### `reset_release_type` <a name="reset_release_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetReleaseType"></a>

```python
def reset_release_type() -> None
```

##### `reset_release_version` <a name="reset_release_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetReleaseVersion"></a>

```python
def reset_release_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciJmsJavaReleases resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleases.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleases.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleases.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleases.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciJmsJavaReleases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciJmsJavaReleases to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciJmsJavaReleases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsJavaReleases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList">DataOciJmsJavaReleasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.javaReleaseCollection">java_release_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList">DataOciJmsJavaReleasesJavaReleaseCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.familyVersionInput">family_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter">DataOciJmsJavaReleasesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.jreSecurityStatusInput">jre_security_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.licenseTypeInput">license_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.releaseTypeInput">release_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.releaseVersionInput">release_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.familyVersion">family_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.jreSecurityStatus">jre_security_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.licenseType">license_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.releaseType">release_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.releaseVersion">release_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.filter"></a>

```python
filter: DataOciJmsJavaReleasesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList">DataOciJmsJavaReleasesFilterList</a>

---

##### `java_release_collection`<sup>Required</sup> <a name="java_release_collection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.javaReleaseCollection"></a>

```python
java_release_collection: DataOciJmsJavaReleasesJavaReleaseCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList">DataOciJmsJavaReleasesJavaReleaseCollectionList</a>

---

##### `family_version_input`<sup>Optional</sup> <a name="family_version_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.familyVersionInput"></a>

```python
family_version_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciJmsJavaReleasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter">DataOciJmsJavaReleasesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `jre_security_status_input`<sup>Optional</sup> <a name="jre_security_status_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.jreSecurityStatusInput"></a>

```python
jre_security_status_input: str
```

- *Type:* str

---

##### `license_type_input`<sup>Optional</sup> <a name="license_type_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.licenseTypeInput"></a>

```python
license_type_input: str
```

- *Type:* str

---

##### `release_type_input`<sup>Optional</sup> <a name="release_type_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.releaseTypeInput"></a>

```python
release_type_input: str
```

- *Type:* str

---

##### `release_version_input`<sup>Optional</sup> <a name="release_version_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.releaseVersionInput"></a>

```python
release_version_input: str
```

- *Type:* str

---

##### `family_version`<sup>Required</sup> <a name="family_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.familyVersion"></a>

```python
family_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `jre_security_status`<sup>Required</sup> <a name="jre_security_status" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.jreSecurityStatus"></a>

```python
jre_security_status: str
```

- *Type:* str

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

---

##### `release_type`<sup>Required</sup> <a name="release_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.releaseType"></a>

```python
release_type: str
```

- *Type:* str

---

##### `release_version`<sup>Required</sup> <a name="release_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.releaseVersion"></a>

```python
release_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsJavaReleasesConfig <a name="DataOciJmsJavaReleasesConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  family_version: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciJmsJavaReleasesFilter]] = None,
  id: str = None,
  jre_security_status: str = None,
  license_type: str = None,
  release_type: str = None,
  release_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.familyVersion">family_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#family_version DataOciJmsJavaReleases#family_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter">DataOciJmsJavaReleasesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#id DataOciJmsJavaReleases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.jreSecurityStatus">jre_security_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#jre_security_status DataOciJmsJavaReleases#jre_security_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.licenseType">license_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#license_type DataOciJmsJavaReleases#license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.releaseType">release_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#release_type DataOciJmsJavaReleases#release_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.releaseVersion">release_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#release_version DataOciJmsJavaReleases#release_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `family_version`<sup>Optional</sup> <a name="family_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.familyVersion"></a>

```python
family_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#family_version DataOciJmsJavaReleases#family_version}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciJmsJavaReleasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter">DataOciJmsJavaReleasesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#filter DataOciJmsJavaReleases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#id DataOciJmsJavaReleases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jre_security_status`<sup>Optional</sup> <a name="jre_security_status" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.jreSecurityStatus"></a>

```python
jre_security_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#jre_security_status DataOciJmsJavaReleases#jre_security_status}.

---

##### `license_type`<sup>Optional</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#license_type DataOciJmsJavaReleases#license_type}.

---

##### `release_type`<sup>Optional</sup> <a name="release_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.releaseType"></a>

```python
release_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#release_type DataOciJmsJavaReleases#release_type}.

---

##### `release_version`<sup>Optional</sup> <a name="release_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.releaseVersion"></a>

```python
release_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#release_version DataOciJmsJavaReleases#release_version}.

---

### DataOciJmsJavaReleasesFilter <a name="DataOciJmsJavaReleasesFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#name DataOciJmsJavaReleases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#values DataOciJmsJavaReleases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#regex DataOciJmsJavaReleases#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#name DataOciJmsJavaReleases#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#values DataOciJmsJavaReleases#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#regex DataOciJmsJavaReleases#regex}.

---

### DataOciJmsJavaReleasesJavaReleaseCollection <a name="DataOciJmsJavaReleasesJavaReleaseCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollection()
```


### DataOciJmsJavaReleasesJavaReleaseCollectionItems <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItems()
```


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifacts <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifacts" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifacts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifacts()
```


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetails <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetails" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetails()
```


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifacts <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifacts" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifacts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifacts()
```


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetails <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetails" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetails()
```


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatches <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatches" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatches"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatches.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatches()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsJavaReleasesFilterList <a name="DataOciJmsJavaReleasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaReleasesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter">DataOciJmsJavaReleasesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciJmsJavaReleasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter">DataOciJmsJavaReleasesFilter</a>]]

---


### DataOciJmsJavaReleasesFilterOutputReference <a name="DataOciJmsJavaReleasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter">DataOciJmsJavaReleasesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciJmsJavaReleasesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter">DataOciJmsJavaReleasesFilter</a>]

---


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.approximateFileSizeInBytes">approximate_file_size_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.artifactContentType">artifact_content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.artifactDescription">artifact_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.artifactFileName">artifact_file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.artifactId">artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.downloadUrl">download_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.packageType">package_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.packageTypeDetail">package_type_detail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.scriptChecksumUrl">script_checksum_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.scriptDownloadUrl">script_download_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifacts">DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approximate_file_size_in_bytes`<sup>Required</sup> <a name="approximate_file_size_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.approximateFileSizeInBytes"></a>

```python
approximate_file_size_in_bytes: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `artifact_content_type`<sup>Required</sup> <a name="artifact_content_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.artifactContentType"></a>

```python
artifact_content_type: str
```

- *Type:* str

---

##### `artifact_description`<sup>Required</sup> <a name="artifact_description" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.artifactDescription"></a>

```python
artifact_description: str
```

- *Type:* str

---

##### `artifact_file_name`<sup>Required</sup> <a name="artifact_file_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.artifactFileName"></a>

```python
artifact_file_name: str
```

- *Type:* str

---

##### `artifact_id`<sup>Required</sup> <a name="artifact_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.artifactId"></a>

```python
artifact_id: str
```

- *Type:* str

---

##### `download_url`<sup>Required</sup> <a name="download_url" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.downloadUrl"></a>

```python
download_url: str
```

- *Type:* str

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `package_type`<sup>Required</sup> <a name="package_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.packageType"></a>

```python
package_type: str
```

- *Type:* str

---

##### `package_type_detail`<sup>Required</sup> <a name="package_type_detail" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.packageTypeDetail"></a>

```python
package_type_detail: str
```

- *Type:* str

---

##### `script_checksum_url`<sup>Required</sup> <a name="script_checksum_url" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.scriptChecksumUrl"></a>

```python
script_checksum_url: str
```

- *Type:* str

---

##### `script_download_url`<sup>Required</sup> <a name="script_download_url" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.scriptDownloadUrl"></a>

```python
script_download_url: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifacts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifacts">DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifacts</a>

---


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.approximateFileSizeInBytes">approximate_file_size_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.artifactContentType">artifact_content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.artifactDescription">artifact_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.artifactFileName">artifact_file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.artifactId">artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.downloadUrl">download_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.packageType">package_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.packageTypeDetail">package_type_detail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.scriptChecksumUrl">script_checksum_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.scriptDownloadUrl">script_download_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifacts">DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approximate_file_size_in_bytes`<sup>Required</sup> <a name="approximate_file_size_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.approximateFileSizeInBytes"></a>

```python
approximate_file_size_in_bytes: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `artifact_content_type`<sup>Required</sup> <a name="artifact_content_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.artifactContentType"></a>

```python
artifact_content_type: str
```

- *Type:* str

---

##### `artifact_description`<sup>Required</sup> <a name="artifact_description" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.artifactDescription"></a>

```python
artifact_description: str
```

- *Type:* str

---

##### `artifact_file_name`<sup>Required</sup> <a name="artifact_file_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.artifactFileName"></a>

```python
artifact_file_name: str
```

- *Type:* str

---

##### `artifact_id`<sup>Required</sup> <a name="artifact_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.artifactId"></a>

```python
artifact_id: str
```

- *Type:* str

---

##### `download_url`<sup>Required</sup> <a name="download_url" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.downloadUrl"></a>

```python
download_url: str
```

- *Type:* str

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `package_type`<sup>Required</sup> <a name="package_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.packageType"></a>

```python
package_type: str
```

- *Type:* str

---

##### `package_type_detail`<sup>Required</sup> <a name="package_type_detail" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.packageTypeDetail"></a>

```python
package_type_detail: str
```

- *Type:* str

---

##### `script_checksum_url`<sup>Required</sup> <a name="script_checksum_url" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.scriptChecksumUrl"></a>

```python
script_checksum_url: str
```

- *Type:* str

---

##### `script_download_url`<sup>Required</sup> <a name="script_download_url" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.scriptDownloadUrl"></a>

```python
script_download_url: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifacts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifacts">DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifacts</a>

---


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.docUrl">doc_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.endOfSupportLifeDate">end_of_support_life_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.familyVersion">family_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.isSupportedVersion">is_supported_version</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.latestReleaseArtifacts">latest_release_artifacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList">DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.latestReleaseVersion">latest_release_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.releaseDate">release_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.supportType">support_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetails">DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `doc_url`<sup>Required</sup> <a name="doc_url" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.docUrl"></a>

```python
doc_url: str
```

- *Type:* str

---

##### `end_of_support_life_date`<sup>Required</sup> <a name="end_of_support_life_date" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.endOfSupportLifeDate"></a>

```python
end_of_support_life_date: str
```

- *Type:* str

---

##### `family_version`<sup>Required</sup> <a name="family_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.familyVersion"></a>

```python
family_version: str
```

- *Type:* str

---

##### `is_supported_version`<sup>Required</sup> <a name="is_supported_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.isSupportedVersion"></a>

```python
is_supported_version: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `latest_release_artifacts`<sup>Required</sup> <a name="latest_release_artifacts" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.latestReleaseArtifacts"></a>

```python
latest_release_artifacts: DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList">DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList</a>

---

##### `latest_release_version`<sup>Required</sup> <a name="latest_release_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.latestReleaseVersion"></a>

```python
latest_release_version: str
```

- *Type:* str

---

##### `release_date`<sup>Required</sup> <a name="release_date" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.releaseDate"></a>

```python
release_date: str
```

- *Type:* str

---

##### `support_type`<sup>Required</sup> <a name="support_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.supportType"></a>

```python
support_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetails">DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetails</a>

---


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.property.licenseType">license_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.property.licenseUrl">license_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetails">DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

---

##### `license_url`<sup>Required</sup> <a name="license_url" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.property.licenseUrl"></a>

```python
license_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetails">DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetails</a>

---


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsList <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.property.patchUrl">patch_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatches">DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatches</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `patch_url`<sup>Required</sup> <a name="patch_url" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.property.patchUrl"></a>

```python
patch_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatches
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatches">DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatches</a>

---


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.artifactContentTypes">artifact_content_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.artifacts">artifacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList">DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.daysUnderSecurityBaseline">days_under_security_baseline</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.familyDetails">family_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList">DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.familyVersion">family_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.licenseDetails">license_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList">DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.licenseType">license_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.mosPatches">mos_patches</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList">DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.parentReleaseVersion">parent_release_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.releaseDate">release_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.releaseNotesUrl">release_notes_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.releaseType">release_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.releaseVersion">release_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.securityStatus">security_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItems">DataOciJmsJavaReleasesJavaReleaseCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `artifact_content_types`<sup>Required</sup> <a name="artifact_content_types" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.artifactContentTypes"></a>

```python
artifact_content_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `artifacts`<sup>Required</sup> <a name="artifacts" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.artifacts"></a>

```python
artifacts: DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList">DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList</a>

---

##### `days_under_security_baseline`<sup>Required</sup> <a name="days_under_security_baseline" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.daysUnderSecurityBaseline"></a>

```python
days_under_security_baseline: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `family_details`<sup>Required</sup> <a name="family_details" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.familyDetails"></a>

```python
family_details: DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList">DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList</a>

---

##### `family_version`<sup>Required</sup> <a name="family_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.familyVersion"></a>

```python
family_version: str
```

- *Type:* str

---

##### `license_details`<sup>Required</sup> <a name="license_details" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.licenseDetails"></a>

```python
license_details: DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList">DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList</a>

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

---

##### `mos_patches`<sup>Required</sup> <a name="mos_patches" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.mosPatches"></a>

```python
mos_patches: DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList">DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList</a>

---

##### `parent_release_version`<sup>Required</sup> <a name="parent_release_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.parentReleaseVersion"></a>

```python
parent_release_version: str
```

- *Type:* str

---

##### `release_date`<sup>Required</sup> <a name="release_date" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.releaseDate"></a>

```python
release_date: str
```

- *Type:* str

---

##### `release_notes_url`<sup>Required</sup> <a name="release_notes_url" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.releaseNotesUrl"></a>

```python
release_notes_url: str
```

- *Type:* str

---

##### `release_type`<sup>Required</sup> <a name="release_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.releaseType"></a>

```python
release_type: str
```

- *Type:* str

---

##### `release_version`<sup>Required</sup> <a name="release_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.releaseVersion"></a>

```python
release_version: str
```

- *Type:* str

---

##### `security_status`<sup>Required</sup> <a name="security_status" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.securityStatus"></a>

```python
security_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaReleasesJavaReleaseCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItems">DataOciJmsJavaReleasesJavaReleaseCollectionItems</a>

---


### DataOciJmsJavaReleasesJavaReleaseCollectionList <a name="DataOciJmsJavaReleasesJavaReleaseCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference <a name="DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_releases

dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList">DataOciJmsJavaReleasesJavaReleaseCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollection">DataOciJmsJavaReleasesJavaReleaseCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.property.items"></a>

```python
items: DataOciJmsJavaReleasesJavaReleaseCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList">DataOciJmsJavaReleasesJavaReleaseCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaReleasesJavaReleaseCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollection">DataOciJmsJavaReleasesJavaReleaseCollection</a>

---



