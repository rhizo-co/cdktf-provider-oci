# `dataOciCertificatesManagementCertificateAuthorityVersion` Submodule <a name="`dataOciCertificatesManagementCertificateAuthorityVersion` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCertificatesManagementCertificateAuthorityVersion <a name="DataOciCertificatesManagementCertificateAuthorityVersion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version oci_certificates_management_certificate_authority_version}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_version

dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion(
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
  certificate_authority_version_number: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.certificateAuthorityId">certificate_authority_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#certificate_authority_id DataOciCertificatesManagementCertificateAuthorityVersion#certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.certificateAuthorityVersionNumber">certificate_authority_version_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#certificate_authority_version_number DataOciCertificatesManagementCertificateAuthorityVersion#certificate_authority_version_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#id DataOciCertificatesManagementCertificateAuthorityVersion#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_authority_id`<sup>Required</sup> <a name="certificate_authority_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.certificateAuthorityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#certificate_authority_id DataOciCertificatesManagementCertificateAuthorityVersion#certificate_authority_id}.

---

##### `certificate_authority_version_number`<sup>Required</sup> <a name="certificate_authority_version_number" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.certificateAuthorityVersionNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#certificate_authority_version_number DataOciCertificatesManagementCertificateAuthorityVersion#certificate_authority_version_number}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#id DataOciCertificatesManagementCertificateAuthorityVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCertificatesManagementCertificateAuthorityVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_version

dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_version

dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_version

dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_version

dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCertificatesManagementCertificateAuthorityVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCertificatesManagementCertificateAuthorityVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCertificatesManagementCertificateAuthorityVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCertificatesManagementCertificateAuthorityVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.issuerCaVersionNumber">issuer_ca_version_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.revocationStatus">revocation_status</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList">DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.stages">stages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList">DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.timeOfDeletion">time_of_deletion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.validity">validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList">DataOciCertificatesManagementCertificateAuthorityVersionValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.versionName">version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.versionNumber">version_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.certificateAuthorityIdInput">certificate_authority_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.certificateAuthorityVersionNumberInput">certificate_authority_version_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.certificateAuthorityId">certificate_authority_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.certificateAuthorityVersionNumber">certificate_authority_version_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `issuer_ca_version_number`<sup>Required</sup> <a name="issuer_ca_version_number" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.issuerCaVersionNumber"></a>

```python
issuer_ca_version_number: str
```

- *Type:* str

---

##### `revocation_status`<sup>Required</sup> <a name="revocation_status" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.revocationStatus"></a>

```python
revocation_status: DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList">DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList</a>

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `stages`<sup>Required</sup> <a name="stages" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.stages"></a>

```python
stages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subject_alternative_names`<sup>Required</sup> <a name="subject_alternative_names" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList">DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_of_deletion`<sup>Required</sup> <a name="time_of_deletion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.timeOfDeletion"></a>

```python
time_of_deletion: str
```

- *Type:* str

---

##### `validity`<sup>Required</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.validity"></a>

```python
validity: DataOciCertificatesManagementCertificateAuthorityVersionValidityList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList">DataOciCertificatesManagementCertificateAuthorityVersionValidityList</a>

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

---

##### `version_number`<sup>Required</sup> <a name="version_number" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.versionNumber"></a>

```python
version_number: str
```

- *Type:* str

---

##### `certificate_authority_id_input`<sup>Optional</sup> <a name="certificate_authority_id_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.certificateAuthorityIdInput"></a>

```python
certificate_authority_id_input: str
```

- *Type:* str

---

##### `certificate_authority_version_number_input`<sup>Optional</sup> <a name="certificate_authority_version_number_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.certificateAuthorityVersionNumberInput"></a>

```python
certificate_authority_version_number_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `certificate_authority_id`<sup>Required</sup> <a name="certificate_authority_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.certificateAuthorityId"></a>

```python
certificate_authority_id: str
```

- *Type:* str

---

##### `certificate_authority_version_number`<sup>Required</sup> <a name="certificate_authority_version_number" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.certificateAuthorityVersionNumber"></a>

```python
certificate_authority_version_number: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCertificatesManagementCertificateAuthorityVersionConfig <a name="DataOciCertificatesManagementCertificateAuthorityVersionConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_version

dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_authority_id: str,
  certificate_authority_version_number: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.certificateAuthorityId">certificate_authority_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#certificate_authority_id DataOciCertificatesManagementCertificateAuthorityVersion#certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.certificateAuthorityVersionNumber">certificate_authority_version_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#certificate_authority_version_number DataOciCertificatesManagementCertificateAuthorityVersion#certificate_authority_version_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#id DataOciCertificatesManagementCertificateAuthorityVersion#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_authority_id`<sup>Required</sup> <a name="certificate_authority_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.certificateAuthorityId"></a>

```python
certificate_authority_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#certificate_authority_id DataOciCertificatesManagementCertificateAuthorityVersion#certificate_authority_id}.

---

##### `certificate_authority_version_number`<sup>Required</sup> <a name="certificate_authority_version_number" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.certificateAuthorityVersionNumber"></a>

```python
certificate_authority_version_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#certificate_authority_version_number DataOciCertificatesManagementCertificateAuthorityVersion#certificate_authority_version_number}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#id DataOciCertificatesManagementCertificateAuthorityVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus <a name="DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_version

dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus()
```


### DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames <a name="DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_version

dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames()
```


### DataOciCertificatesManagementCertificateAuthorityVersionValidity <a name="DataOciCertificatesManagementCertificateAuthorityVersionValidity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidity.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_version

dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidity()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList <a name="DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_version

dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_version

dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.revocationReason">revocation_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.timeOfRevocation">time_of_revocation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus">DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `revocation_reason`<sup>Required</sup> <a name="revocation_reason" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.revocationReason"></a>

```python
revocation_reason: str
```

- *Type:* str

---

##### `time_of_revocation`<sup>Required</sup> <a name="time_of_revocation" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.timeOfRevocation"></a>

```python
time_of_revocation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus">DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus</a>

---


### DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList <a name="DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_version

dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_version

dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames">DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames">DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames</a>

---


### DataOciCertificatesManagementCertificateAuthorityVersionValidityList <a name="DataOciCertificatesManagementCertificateAuthorityVersionValidityList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_version

dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authority_version

dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.timeOfValidityNotAfter">time_of_validity_not_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.timeOfValidityNotBefore">time_of_validity_not_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidity">DataOciCertificatesManagementCertificateAuthorityVersionValidity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_of_validity_not_after`<sup>Required</sup> <a name="time_of_validity_not_after" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.timeOfValidityNotAfter"></a>

```python
time_of_validity_not_after: str
```

- *Type:* str

---

##### `time_of_validity_not_before`<sup>Required</sup> <a name="time_of_validity_not_before" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.timeOfValidityNotBefore"></a>

```python
time_of_validity_not_before: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCertificatesManagementCertificateAuthorityVersionValidity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidity">DataOciCertificatesManagementCertificateAuthorityVersionValidity</a>

---



