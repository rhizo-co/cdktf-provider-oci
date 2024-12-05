# `dataOciCertificatesManagementCertificateAuthorityVersions` Submodule <a name="`dataOciCertificatesManagementCertificateAuthorityVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCertificatesManagementCertificateAuthorityVersions <a name="DataOciCertificatesManagementCertificateAuthorityVersions" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_versions oci_certificates_management_certificate_authority_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_versions

dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_authority_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCertificatesManagementCertificateAuthorityVersionsFilter]] = None,
  id: str = None,
  version_number: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.certificateAuthorityId">certificate_authority_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_versions#certificate_authority_id DataOciCertificatesManagementCertificateAuthorityVersions#certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilter">DataOciCertificatesManagementCertificateAuthorityVersionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_versions#id DataOciCertificatesManagementCertificateAuthorityVersions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.versionNumber">version_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_versions#version_number DataOciCertificatesManagementCertificateAuthorityVersions#version_number}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_authority_id`<sup>Required</sup> <a name="certificate_authority_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.certificateAuthorityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_versions#certificate_authority_id DataOciCertificatesManagementCertificateAuthorityVersions#certificate_authority_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilter">DataOciCertificatesManagementCertificateAuthorityVersionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_versions#filter DataOciCertificatesManagementCertificateAuthorityVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_versions#id DataOciCertificatesManagementCertificateAuthorityVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version_number`<sup>Optional</sup> <a name="version_number" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.Initializer.parameter.versionNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_versions#version_number DataOciCertificatesManagementCertificateAuthorityVersions#version_number}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.resetVersionNumber">reset_version_number</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCertificatesManagementCertificateAuthorityVersionsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilter">DataOciCertificatesManagementCertificateAuthorityVersionsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_version_number` <a name="reset_version_number" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.resetVersionNumber"></a>

```python
def reset_version_number() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCertificatesManagementCertificateAuthorityVersions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_versions

dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_versions

dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_versions

dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_versions

dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCertificatesManagementCertificateAuthorityVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCertificatesManagementCertificateAuthorityVersions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCertificatesManagementCertificateAuthorityVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCertificatesManagementCertificateAuthorityVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.certificateAuthorityVersionCollection">certificate_authority_version_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList">DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList">DataOciCertificatesManagementCertificateAuthorityVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.certificateAuthorityIdInput">certificate_authority_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilter">DataOciCertificatesManagementCertificateAuthorityVersionsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.versionNumberInput">version_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.certificateAuthorityId">certificate_authority_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.versionNumber">version_number</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `certificate_authority_version_collection`<sup>Required</sup> <a name="certificate_authority_version_collection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.certificateAuthorityVersionCollection"></a>

```python
certificate_authority_version_collection: DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList">DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.filter"></a>

```python
filter: DataOciCertificatesManagementCertificateAuthorityVersionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList">DataOciCertificatesManagementCertificateAuthorityVersionsFilterList</a>

---

##### `certificate_authority_id_input`<sup>Optional</sup> <a name="certificate_authority_id_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.certificateAuthorityIdInput"></a>

```python
certificate_authority_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCertificatesManagementCertificateAuthorityVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilter">DataOciCertificatesManagementCertificateAuthorityVersionsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `version_number_input`<sup>Optional</sup> <a name="version_number_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.versionNumberInput"></a>

```python
version_number_input: str
```

- *Type:* str

---

##### `certificate_authority_id`<sup>Required</sup> <a name="certificate_authority_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.certificateAuthorityId"></a>

```python
certificate_authority_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `version_number`<sup>Required</sup> <a name="version_number" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.versionNumber"></a>

```python
version_number: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollection <a name="DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_versions

dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollection()
```


### DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItems <a name="DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_versions

dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItems()
```


### DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatus <a name="DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatus" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatus.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_versions

dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatus()
```


### DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidity <a name="DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidity.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_versions

dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidity()
```


### DataOciCertificatesManagementCertificateAuthorityVersionsConfig <a name="DataOciCertificatesManagementCertificateAuthorityVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_versions

dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_authority_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCertificatesManagementCertificateAuthorityVersionsFilter]] = None,
  id: str = None,
  version_number: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsConfig.property.certificateAuthorityId">certificate_authority_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_versions#certificate_authority_id DataOciCertificatesManagementCertificateAuthorityVersions#certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilter">DataOciCertificatesManagementCertificateAuthorityVersionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_versions#id DataOciCertificatesManagementCertificateAuthorityVersions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsConfig.property.versionNumber">version_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_versions#version_number DataOciCertificatesManagementCertificateAuthorityVersions#version_number}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_authority_id`<sup>Required</sup> <a name="certificate_authority_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsConfig.property.certificateAuthorityId"></a>

```python
certificate_authority_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_versions#certificate_authority_id DataOciCertificatesManagementCertificateAuthorityVersions#certificate_authority_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCertificatesManagementCertificateAuthorityVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilter">DataOciCertificatesManagementCertificateAuthorityVersionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_versions#filter DataOciCertificatesManagementCertificateAuthorityVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_versions#id DataOciCertificatesManagementCertificateAuthorityVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version_number`<sup>Optional</sup> <a name="version_number" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsConfig.property.versionNumber"></a>

```python
version_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_versions#version_number DataOciCertificatesManagementCertificateAuthorityVersions#version_number}.

---

### DataOciCertificatesManagementCertificateAuthorityVersionsFilter <a name="DataOciCertificatesManagementCertificateAuthorityVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_versions

dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_versions#name DataOciCertificatesManagementCertificateAuthorityVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_versions#values DataOciCertificatesManagementCertificateAuthorityVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_versions#regex DataOciCertificatesManagementCertificateAuthorityVersions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_versions#name DataOciCertificatesManagementCertificateAuthorityVersions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_versions#values DataOciCertificatesManagementCertificateAuthorityVersions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_versions#regex DataOciCertificatesManagementCertificateAuthorityVersions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList <a name="DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_versions

dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_versions

dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.certificateAuthorityId">certificate_authority_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.issuerCaVersionNumber">issuer_ca_version_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.revocationStatus">revocation_status</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList">DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.stages">stages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.timeOfDeletion">time_of_deletion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.validity">validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList">DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.versionName">version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.versionNumber">version_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItems">DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_authority_id`<sup>Required</sup> <a name="certificate_authority_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.certificateAuthorityId"></a>

```python
certificate_authority_id: str
```

- *Type:* str

---

##### `issuer_ca_version_number`<sup>Required</sup> <a name="issuer_ca_version_number" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.issuerCaVersionNumber"></a>

```python
issuer_ca_version_number: str
```

- *Type:* str

---

##### `revocation_status`<sup>Required</sup> <a name="revocation_status" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.revocationStatus"></a>

```python
revocation_status: DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList">DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList</a>

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `stages`<sup>Required</sup> <a name="stages" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.stages"></a>

```python
stages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_of_deletion`<sup>Required</sup> <a name="time_of_deletion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.timeOfDeletion"></a>

```python
time_of_deletion: str
```

- *Type:* str

---

##### `validity`<sup>Required</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.validity"></a>

```python
validity: DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList">DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList</a>

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

---

##### `version_number`<sup>Required</sup> <a name="version_number" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.versionNumber"></a>

```python
version_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItems">DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItems</a>

---


### DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList <a name="DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_versions

dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_versions

dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.property.revocationReason">revocation_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.property.timeOfRevocation">time_of_revocation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatus">DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `revocation_reason`<sup>Required</sup> <a name="revocation_reason" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.property.revocationReason"></a>

```python
revocation_reason: str
```

- *Type:* str

---

##### `time_of_revocation`<sup>Required</sup> <a name="time_of_revocation" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.property.timeOfRevocation"></a>

```python
time_of_revocation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatus
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatus">DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsRevocationStatus</a>

---


### DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList <a name="DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_versions

dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_versions

dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.property.timeOfValidityNotAfter">time_of_validity_not_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.property.timeOfValidityNotBefore">time_of_validity_not_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidity">DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_of_validity_not_after`<sup>Required</sup> <a name="time_of_validity_not_after" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.property.timeOfValidityNotAfter"></a>

```python
time_of_validity_not_after: str
```

- *Type:* str

---

##### `time_of_validity_not_before`<sup>Required</sup> <a name="time_of_validity_not_before" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.property.timeOfValidityNotBefore"></a>

```python
time_of_validity_not_before: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidityOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidity">DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsValidity</a>

---


### DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList <a name="DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_versions

dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_versions

dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList">DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollection">DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.property.items"></a>

```python
items: DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList">DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollection">DataOciCertificatesManagementCertificateAuthorityVersionsCertificateAuthorityVersionCollection</a>

---


### DataOciCertificatesManagementCertificateAuthorityVersionsFilterList <a name="DataOciCertificatesManagementCertificateAuthorityVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_versions

dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilter">DataOciCertificatesManagementCertificateAuthorityVersionsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCertificatesManagementCertificateAuthorityVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilter">DataOciCertificatesManagementCertificateAuthorityVersionsFilter</a>]]

---


### DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_versions

dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilter">DataOciCertificatesManagementCertificateAuthorityVersionsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCertificatesManagementCertificateAuthorityVersionsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersions.DataOciCertificatesManagementCertificateAuthorityVersionsFilter">DataOciCertificatesManagementCertificateAuthorityVersionsFilter</a>]

---



