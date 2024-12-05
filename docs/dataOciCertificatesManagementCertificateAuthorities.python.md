# `dataOciCertificatesManagementCertificateAuthorities` Submodule <a name="`dataOciCertificatesManagementCertificateAuthorities` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCertificatesManagementCertificateAuthorities <a name="DataOciCertificatesManagementCertificateAuthorities" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities oci_certificates_management_certificate_authorities}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_authority_id: str = None,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCertificatesManagementCertificateAuthoritiesFilter]] = None,
  id: str = None,
  issuer_certificate_authority_id: str = None,
  name: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.certificateAuthorityId">certificate_authority_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#certificate_authority_id DataOciCertificatesManagementCertificateAuthorities#certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#compartment_id DataOciCertificatesManagementCertificateAuthorities#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter">DataOciCertificatesManagementCertificateAuthoritiesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#id DataOciCertificatesManagementCertificateAuthorities#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.issuerCertificateAuthorityId">issuer_certificate_authority_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#issuer_certificate_authority_id DataOciCertificatesManagementCertificateAuthorities#issuer_certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#name DataOciCertificatesManagementCertificateAuthorities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#state DataOciCertificatesManagementCertificateAuthorities#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_authority_id`<sup>Optional</sup> <a name="certificate_authority_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.certificateAuthorityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#certificate_authority_id DataOciCertificatesManagementCertificateAuthorities#certificate_authority_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#compartment_id DataOciCertificatesManagementCertificateAuthorities#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter">DataOciCertificatesManagementCertificateAuthoritiesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#filter DataOciCertificatesManagementCertificateAuthorities#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#id DataOciCertificatesManagementCertificateAuthorities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer_certificate_authority_id`<sup>Optional</sup> <a name="issuer_certificate_authority_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.issuerCertificateAuthorityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#issuer_certificate_authority_id DataOciCertificatesManagementCertificateAuthorities#issuer_certificate_authority_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#name DataOciCertificatesManagementCertificateAuthorities#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#state DataOciCertificatesManagementCertificateAuthorities#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetCertificateAuthorityId">reset_certificate_authority_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetIssuerCertificateAuthorityId">reset_issuer_certificate_authority_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCertificatesManagementCertificateAuthoritiesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter">DataOciCertificatesManagementCertificateAuthoritiesFilter</a>]]

---

##### `reset_certificate_authority_id` <a name="reset_certificate_authority_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetCertificateAuthorityId"></a>

```python
def reset_certificate_authority_id() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_issuer_certificate_authority_id` <a name="reset_issuer_certificate_authority_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetIssuerCertificateAuthorityId"></a>

```python
def reset_issuer_certificate_authority_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCertificatesManagementCertificateAuthorities resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCertificatesManagementCertificateAuthorities resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCertificatesManagementCertificateAuthorities to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCertificatesManagementCertificateAuthorities that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCertificatesManagementCertificateAuthorities to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.certificateAuthorityCollection">certificate_authority_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList">DataOciCertificatesManagementCertificateAuthoritiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.certificateAuthorityIdInput">certificate_authority_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter">DataOciCertificatesManagementCertificateAuthoritiesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.issuerCertificateAuthorityIdInput">issuer_certificate_authority_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.certificateAuthorityId">certificate_authority_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.issuerCertificateAuthorityId">issuer_certificate_authority_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `certificate_authority_collection`<sup>Required</sup> <a name="certificate_authority_collection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.certificateAuthorityCollection"></a>

```python
certificate_authority_collection: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.filter"></a>

```python
filter: DataOciCertificatesManagementCertificateAuthoritiesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList">DataOciCertificatesManagementCertificateAuthoritiesFilterList</a>

---

##### `certificate_authority_id_input`<sup>Optional</sup> <a name="certificate_authority_id_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.certificateAuthorityIdInput"></a>

```python
certificate_authority_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCertificatesManagementCertificateAuthoritiesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter">DataOciCertificatesManagementCertificateAuthoritiesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issuer_certificate_authority_id_input`<sup>Optional</sup> <a name="issuer_certificate_authority_id_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.issuerCertificateAuthorityIdInput"></a>

```python
issuer_certificate_authority_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `certificate_authority_id`<sup>Required</sup> <a name="certificate_authority_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.certificateAuthorityId"></a>

```python
certificate_authority_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer_certificate_authority_id`<sup>Required</sup> <a name="issuer_certificate_authority_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.issuerCertificateAuthorityId"></a>

```python
issuer_certificate_authority_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection()
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems()
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig()
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject()
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity()
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules()
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails()
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig()
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion()
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus()
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity()
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject()
```


### DataOciCertificatesManagementCertificateAuthoritiesConfig <a name="DataOciCertificatesManagementCertificateAuthoritiesConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_authority_id: str = None,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCertificatesManagementCertificateAuthoritiesFilter]] = None,
  id: str = None,
  issuer_certificate_authority_id: str = None,
  name: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.certificateAuthorityId">certificate_authority_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#certificate_authority_id DataOciCertificatesManagementCertificateAuthorities#certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#compartment_id DataOciCertificatesManagementCertificateAuthorities#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter">DataOciCertificatesManagementCertificateAuthoritiesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#id DataOciCertificatesManagementCertificateAuthorities#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.issuerCertificateAuthorityId">issuer_certificate_authority_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#issuer_certificate_authority_id DataOciCertificatesManagementCertificateAuthorities#issuer_certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#name DataOciCertificatesManagementCertificateAuthorities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#state DataOciCertificatesManagementCertificateAuthorities#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_authority_id`<sup>Optional</sup> <a name="certificate_authority_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.certificateAuthorityId"></a>

```python
certificate_authority_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#certificate_authority_id DataOciCertificatesManagementCertificateAuthorities#certificate_authority_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#compartment_id DataOciCertificatesManagementCertificateAuthorities#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCertificatesManagementCertificateAuthoritiesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter">DataOciCertificatesManagementCertificateAuthoritiesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#filter DataOciCertificatesManagementCertificateAuthorities#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#id DataOciCertificatesManagementCertificateAuthorities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer_certificate_authority_id`<sup>Optional</sup> <a name="issuer_certificate_authority_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.issuerCertificateAuthorityId"></a>

```python
issuer_certificate_authority_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#issuer_certificate_authority_id DataOciCertificatesManagementCertificateAuthorities#issuer_certificate_authority_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#name DataOciCertificatesManagementCertificateAuthorities#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#state DataOciCertificatesManagementCertificateAuthorities#state}.

---

### DataOciCertificatesManagementCertificateAuthoritiesFilter <a name="DataOciCertificatesManagementCertificateAuthoritiesFilter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#name DataOciCertificatesManagementCertificateAuthorities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#values DataOciCertificatesManagementCertificateAuthorities#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#regex DataOciCertificatesManagementCertificateAuthorities#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#name DataOciCertificatesManagementCertificateAuthorities#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#values DataOciCertificatesManagementCertificateAuthorities#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#regex DataOciCertificatesManagementCertificateAuthorities#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.configType">config_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.issuerCertificateAuthorityId">issuer_certificate_authority_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.subject">subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.validity">validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.versionName">version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_type`<sup>Required</sup> <a name="config_type" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.configType"></a>

```python
config_type: str
```

- *Type:* str

---

##### `issuer_certificate_authority_id`<sup>Required</sup> <a name="issuer_certificate_authority_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.issuerCertificateAuthorityId"></a>

```python
issuer_certificate_authority_id: str
```

- *Type:* str

---

##### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.signingAlgorithm"></a>

```python
signing_algorithm: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.subject"></a>

```python
subject: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList</a>

---

##### `validity`<sup>Required</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.validity"></a>

```python
validity: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList</a>

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.distinguishedNameQualifier">distinguished_name_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.domainComponent">domain_component</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.generationQualifier">generation_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.givenName">given_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.initials">initials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.localityName">locality_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.pseudonym">pseudonym</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.stateOrProvinceName">state_or_province_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.street">street</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.surname">surname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `distinguished_name_qualifier`<sup>Required</sup> <a name="distinguished_name_qualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.distinguishedNameQualifier"></a>

```python
distinguished_name_qualifier: str
```

- *Type:* str

---

##### `domain_component`<sup>Required</sup> <a name="domain_component" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.domainComponent"></a>

```python
domain_component: str
```

- *Type:* str

---

##### `generation_qualifier`<sup>Required</sup> <a name="generation_qualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.generationQualifier"></a>

```python
generation_qualifier: str
```

- *Type:* str

---

##### `given_name`<sup>Required</sup> <a name="given_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

---

##### `initials`<sup>Required</sup> <a name="initials" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.initials"></a>

```python
initials: str
```

- *Type:* str

---

##### `locality_name`<sup>Required</sup> <a name="locality_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.localityName"></a>

```python
locality_name: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `organizational_unit`<sup>Required</sup> <a name="organizational_unit" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.pseudonym"></a>

```python
pseudonym: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `state_or_province_name`<sup>Required</sup> <a name="state_or_province_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.stateOrProvinceName"></a>

```python
state_or_province_name: str
```

- *Type:* str

---

##### `street`<sup>Required</sup> <a name="street" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.street"></a>

```python
street: str
```

- *Type:* str

---

##### `surname`<sup>Required</sup> <a name="surname" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.surname"></a>

```python
surname: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotAfter">time_of_validity_not_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotBefore">time_of_validity_not_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_of_validity_not_after`<sup>Required</sup> <a name="time_of_validity_not_after" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotAfter"></a>

```python
time_of_validity_not_after: str
```

- *Type:* str

---

##### `time_of_validity_not_before`<sup>Required</sup> <a name="time_of_validity_not_before" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotBefore"></a>

```python
time_of_validity_not_before: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.certificateAuthorityMaxValidityDuration">certificate_authority_max_validity_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.leafCertificateMaxValidityDuration">leaf_certificate_max_validity_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.ruleType">rule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_authority_max_validity_duration`<sup>Required</sup> <a name="certificate_authority_max_validity_duration" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.certificateAuthorityMaxValidityDuration"></a>

```python
certificate_authority_max_validity_duration: str
```

- *Type:* str

---

##### `leaf_certificate_max_validity_duration`<sup>Required</sup> <a name="leaf_certificate_max_validity_duration" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.leafCertificateMaxValidityDuration"></a>

```python
leaf_certificate_max_validity_duration: str
```

- *Type:* str

---

##### `rule_type`<sup>Required</sup> <a name="rule_type" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.ruleType"></a>

```python
rule_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName">object_storage_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace">object_storage_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat">object_storage_object_name_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_storage_bucket_name`<sup>Required</sup> <a name="object_storage_bucket_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName"></a>

```python
object_storage_bucket_name: str
```

- *Type:* str

---

##### `object_storage_namespace`<sup>Required</sup> <a name="object_storage_namespace" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace"></a>

```python
object_storage_namespace: str
```

- *Type:* str

---

##### `object_storage_object_name_format`<sup>Required</sup> <a name="object_storage_object_name_format" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat"></a>

```python
object_storage_object_name_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.customFormattedUrls">custom_formatted_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.objectStorageConfig">object_storage_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_formatted_urls`<sup>Required</sup> <a name="custom_formatted_urls" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.customFormattedUrls"></a>

```python
custom_formatted_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `object_storage_config`<sup>Required</sup> <a name="object_storage_config" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.objectStorageConfig"></a>

```python
object_storage_config: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.certificateAuthorityId">certificate_authority_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.issuerCaVersionNumber">issuer_ca_version_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.revocationStatus">revocation_status</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.stages">stages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.timeOfDeletion">time_of_deletion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.validity">validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.versionName">version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.versionNumber">version_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_authority_id`<sup>Required</sup> <a name="certificate_authority_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.certificateAuthorityId"></a>

```python
certificate_authority_id: str
```

- *Type:* str

---

##### `issuer_ca_version_number`<sup>Required</sup> <a name="issuer_ca_version_number" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.issuerCaVersionNumber"></a>

```python
issuer_ca_version_number: str
```

- *Type:* str

---

##### `revocation_status`<sup>Required</sup> <a name="revocation_status" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.revocationStatus"></a>

```python
revocation_status: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList</a>

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `stages`<sup>Required</sup> <a name="stages" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.stages"></a>

```python
stages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_of_deletion`<sup>Required</sup> <a name="time_of_deletion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.timeOfDeletion"></a>

```python
time_of_deletion: str
```

- *Type:* str

---

##### `validity`<sup>Required</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.validity"></a>

```python
validity: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList</a>

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

---

##### `version_number`<sup>Required</sup> <a name="version_number" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.versionNumber"></a>

```python
version_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.revocationReason">revocation_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation">time_of_revocation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `revocation_reason`<sup>Required</sup> <a name="revocation_reason" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.revocationReason"></a>

```python
revocation_reason: str
```

- *Type:* str

---

##### `time_of_revocation`<sup>Required</sup> <a name="time_of_revocation" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation"></a>

```python
time_of_revocation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter">time_of_validity_not_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore">time_of_validity_not_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_of_validity_not_after`<sup>Required</sup> <a name="time_of_validity_not_after" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter"></a>

```python
time_of_validity_not_after: str
```

- *Type:* str

---

##### `time_of_validity_not_before`<sup>Required</sup> <a name="time_of_validity_not_before" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore"></a>

```python
time_of_validity_not_before: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.certificateAuthorityConfig">certificate_authority_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.certificateAuthorityRules">certificate_authority_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.certificateRevocationListDetails">certificate_revocation_list_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.configType">config_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.currentVersion">current_version</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.issuerCertificateAuthorityId">issuer_certificate_authority_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.subject">subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.timeOfDeletion">time_of_deletion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_authority_config`<sup>Required</sup> <a name="certificate_authority_config" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.certificateAuthorityConfig"></a>

```python
certificate_authority_config: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList</a>

---

##### `certificate_authority_rules`<sup>Required</sup> <a name="certificate_authority_rules" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.certificateAuthorityRules"></a>

```python
certificate_authority_rules: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList</a>

---

##### `certificate_revocation_list_details`<sup>Required</sup> <a name="certificate_revocation_list_details" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.certificateRevocationListDetails"></a>

```python
certificate_revocation_list_details: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `config_type`<sup>Required</sup> <a name="config_type" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.configType"></a>

```python
config_type: str
```

- *Type:* str

---

##### `current_version`<sup>Required</sup> <a name="current_version" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.currentVersion"></a>

```python
current_version: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer_certificate_authority_id`<sup>Required</sup> <a name="issuer_certificate_authority_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.issuerCertificateAuthorityId"></a>

```python
issuer_certificate_authority_id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.signingAlgorithm"></a>

```python
signing_algorithm: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.subject"></a>

```python
subject: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_of_deletion`<sup>Required</sup> <a name="time_of_deletion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.timeOfDeletion"></a>

```python
time_of_deletion: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.distinguishedNameQualifier">distinguished_name_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.domainComponent">domain_component</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.generationQualifier">generation_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.givenName">given_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.initials">initials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.localityName">locality_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.pseudonym">pseudonym</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.stateOrProvinceName">state_or_province_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.street">street</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.surname">surname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `distinguished_name_qualifier`<sup>Required</sup> <a name="distinguished_name_qualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.distinguishedNameQualifier"></a>

```python
distinguished_name_qualifier: str
```

- *Type:* str

---

##### `domain_component`<sup>Required</sup> <a name="domain_component" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.domainComponent"></a>

```python
domain_component: str
```

- *Type:* str

---

##### `generation_qualifier`<sup>Required</sup> <a name="generation_qualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.generationQualifier"></a>

```python
generation_qualifier: str
```

- *Type:* str

---

##### `given_name`<sup>Required</sup> <a name="given_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

---

##### `initials`<sup>Required</sup> <a name="initials" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.initials"></a>

```python
initials: str
```

- *Type:* str

---

##### `locality_name`<sup>Required</sup> <a name="locality_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.localityName"></a>

```python
locality_name: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `organizational_unit`<sup>Required</sup> <a name="organizational_unit" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.pseudonym"></a>

```python
pseudonym: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `state_or_province_name`<sup>Required</sup> <a name="state_or_province_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.stateOrProvinceName"></a>

```python
state_or_province_name: str
```

- *Type:* str

---

##### `street`<sup>Required</sup> <a name="street" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.street"></a>

```python
street: str
```

- *Type:* str

---

##### `surname`<sup>Required</sup> <a name="surname" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.surname"></a>

```python
surname: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.property.items"></a>

```python
items: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesFilterList <a name="DataOciCertificatesManagementCertificateAuthoritiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter">DataOciCertificatesManagementCertificateAuthoritiesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCertificatesManagementCertificateAuthoritiesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter">DataOciCertificatesManagementCertificateAuthoritiesFilter</a>]]

---


### DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_certificate_authorities

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter">DataOciCertificatesManagementCertificateAuthoritiesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCertificatesManagementCertificateAuthoritiesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter">DataOciCertificatesManagementCertificateAuthoritiesFilter</a>]

---



