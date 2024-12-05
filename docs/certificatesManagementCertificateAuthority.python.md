# `certificatesManagementCertificateAuthority` Submodule <a name="`certificatesManagementCertificateAuthority` Submodule" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificatesManagementCertificateAuthority <a name="CertificatesManagementCertificateAuthority" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority oci_certificates_management_certificate_authority}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_authority_config: CertificatesManagementCertificateAuthorityCertificateAuthorityConfig,
  compartment_id: str,
  kms_key_id: str,
  name: str,
  certificate_authority_rules: typing.Union[IResolvable, typing.List[CertificatesManagementCertificateAuthorityCertificateAuthorityRules]] = None,
  certificate_revocation_list_details: CertificatesManagementCertificateAuthorityCertificateRevocationListDetails = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: CertificatesManagementCertificateAuthorityTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.certificateAuthorityConfig">certificate_authority_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig">CertificatesManagementCertificateAuthorityCertificateAuthorityConfig</a></code> | certificate_authority_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#compartment_id CertificatesManagementCertificateAuthority#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#kms_key_id CertificatesManagementCertificateAuthority#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#name CertificatesManagementCertificateAuthority#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.certificateAuthorityRules">certificate_authority_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules">CertificatesManagementCertificateAuthorityCertificateAuthorityRules</a>]]</code> | certificate_authority_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.certificateRevocationListDetails">certificate_revocation_list_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails">CertificatesManagementCertificateAuthorityCertificateRevocationListDetails</a></code> | certificate_revocation_list_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#defined_tags CertificatesManagementCertificateAuthority#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#description CertificatesManagementCertificateAuthority#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#freeform_tags CertificatesManagementCertificateAuthority#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#id CertificatesManagementCertificateAuthority#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts">CertificatesManagementCertificateAuthorityTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_authority_config`<sup>Required</sup> <a name="certificate_authority_config" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.certificateAuthorityConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig">CertificatesManagementCertificateAuthorityCertificateAuthorityConfig</a>

certificate_authority_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#certificate_authority_config CertificatesManagementCertificateAuthority#certificate_authority_config}

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#compartment_id CertificatesManagementCertificateAuthority#compartment_id}.

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#kms_key_id CertificatesManagementCertificateAuthority#kms_key_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#name CertificatesManagementCertificateAuthority#name}.

---

##### `certificate_authority_rules`<sup>Optional</sup> <a name="certificate_authority_rules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.certificateAuthorityRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules">CertificatesManagementCertificateAuthorityCertificateAuthorityRules</a>]]

certificate_authority_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#certificate_authority_rules CertificatesManagementCertificateAuthority#certificate_authority_rules}

---

##### `certificate_revocation_list_details`<sup>Optional</sup> <a name="certificate_revocation_list_details" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.certificateRevocationListDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails">CertificatesManagementCertificateAuthorityCertificateRevocationListDetails</a>

certificate_revocation_list_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#certificate_revocation_list_details CertificatesManagementCertificateAuthority#certificate_revocation_list_details}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#defined_tags CertificatesManagementCertificateAuthority#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#description CertificatesManagementCertificateAuthority#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#freeform_tags CertificatesManagementCertificateAuthority#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#id CertificatesManagementCertificateAuthority#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts">CertificatesManagementCertificateAuthorityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#timeouts CertificatesManagementCertificateAuthority#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putCertificateAuthorityConfig">put_certificate_authority_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putCertificateAuthorityRules">put_certificate_authority_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putCertificateRevocationListDetails">put_certificate_revocation_list_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetCertificateAuthorityRules">reset_certificate_authority_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetCertificateRevocationListDetails">reset_certificate_revocation_list_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_certificate_authority_config` <a name="put_certificate_authority_config" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putCertificateAuthorityConfig"></a>

```python
def put_certificate_authority_config(
  config_type: str,
  subject: CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject,
  issuer_certificate_authority_id: str = None,
  signing_algorithm: str = None,
  validity: CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity = None,
  version_name: str = None
) -> None
```

###### `config_type`<sup>Required</sup> <a name="config_type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putCertificateAuthorityConfig.parameter.configType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#config_type CertificatesManagementCertificateAuthority#config_type}.

---

###### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putCertificateAuthorityConfig.parameter.subject"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject</a>

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#subject CertificatesManagementCertificateAuthority#subject}

---

###### `issuer_certificate_authority_id`<sup>Optional</sup> <a name="issuer_certificate_authority_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putCertificateAuthorityConfig.parameter.issuerCertificateAuthorityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#issuer_certificate_authority_id CertificatesManagementCertificateAuthority#issuer_certificate_authority_id}.

---

###### `signing_algorithm`<sup>Optional</sup> <a name="signing_algorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putCertificateAuthorityConfig.parameter.signingAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#signing_algorithm CertificatesManagementCertificateAuthority#signing_algorithm}.

---

###### `validity`<sup>Optional</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putCertificateAuthorityConfig.parameter.validity"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity</a>

validity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#validity CertificatesManagementCertificateAuthority#validity}

---

###### `version_name`<sup>Optional</sup> <a name="version_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putCertificateAuthorityConfig.parameter.versionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#version_name CertificatesManagementCertificateAuthority#version_name}.

---

##### `put_certificate_authority_rules` <a name="put_certificate_authority_rules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putCertificateAuthorityRules"></a>

```python
def put_certificate_authority_rules(
  value: typing.Union[IResolvable, typing.List[CertificatesManagementCertificateAuthorityCertificateAuthorityRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putCertificateAuthorityRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules">CertificatesManagementCertificateAuthorityCertificateAuthorityRules</a>]]

---

##### `put_certificate_revocation_list_details` <a name="put_certificate_revocation_list_details" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putCertificateRevocationListDetails"></a>

```python
def put_certificate_revocation_list_details(
  object_storage_config: CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig,
  custom_formatted_urls: typing.List[str] = None
) -> None
```

###### `object_storage_config`<sup>Required</sup> <a name="object_storage_config" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putCertificateRevocationListDetails.parameter.objectStorageConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig">CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig</a>

object_storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#object_storage_config CertificatesManagementCertificateAuthority#object_storage_config}

---

###### `custom_formatted_urls`<sup>Optional</sup> <a name="custom_formatted_urls" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putCertificateRevocationListDetails.parameter.customFormattedUrls"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#custom_formatted_urls CertificatesManagementCertificateAuthority#custom_formatted_urls}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#create CertificatesManagementCertificateAuthority#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#delete CertificatesManagementCertificateAuthority#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#update CertificatesManagementCertificateAuthority#update}.

---

##### `reset_certificate_authority_rules` <a name="reset_certificate_authority_rules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetCertificateAuthorityRules"></a>

```python
def reset_certificate_authority_rules() -> None
```

##### `reset_certificate_revocation_list_details` <a name="reset_certificate_revocation_list_details" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetCertificateRevocationListDetails"></a>

```python
def reset_certificate_revocation_list_details() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CertificatesManagementCertificateAuthority resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CertificatesManagementCertificateAuthority resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CertificatesManagementCertificateAuthority to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CertificatesManagementCertificateAuthority that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CertificatesManagementCertificateAuthority to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.certificateAuthorityConfig">certificate_authority_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.certificateAuthorityRules">certificate_authority_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList">CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.certificateRevocationListDetails">certificate_revocation_list_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference">CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.configType">config_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.currentVersion">current_version</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList">CertificatesManagementCertificateAuthorityCurrentVersionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.issuerCertificateAuthorityId">issuer_certificate_authority_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.subject">subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList">CertificatesManagementCertificateAuthoritySubjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.timeOfDeletion">time_of_deletion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference">CertificatesManagementCertificateAuthorityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.certificateAuthorityConfigInput">certificate_authority_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig">CertificatesManagementCertificateAuthorityCertificateAuthorityConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.certificateAuthorityRulesInput">certificate_authority_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules">CertificatesManagementCertificateAuthorityCertificateAuthorityRules</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.certificateRevocationListDetailsInput">certificate_revocation_list_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails">CertificatesManagementCertificateAuthorityCertificateRevocationListDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts">CertificatesManagementCertificateAuthorityTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_authority_config`<sup>Required</sup> <a name="certificate_authority_config" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.certificateAuthorityConfig"></a>

```python
certificate_authority_config: CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference</a>

---

##### `certificate_authority_rules`<sup>Required</sup> <a name="certificate_authority_rules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.certificateAuthorityRules"></a>

```python
certificate_authority_rules: CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList">CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList</a>

---

##### `certificate_revocation_list_details`<sup>Required</sup> <a name="certificate_revocation_list_details" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.certificateRevocationListDetails"></a>

```python
certificate_revocation_list_details: CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference">CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference</a>

---

##### `config_type`<sup>Required</sup> <a name="config_type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.configType"></a>

```python
config_type: str
```

- *Type:* str

---

##### `current_version`<sup>Required</sup> <a name="current_version" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.currentVersion"></a>

```python
current_version: CertificatesManagementCertificateAuthorityCurrentVersionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList">CertificatesManagementCertificateAuthorityCurrentVersionList</a>

---

##### `issuer_certificate_authority_id`<sup>Required</sup> <a name="issuer_certificate_authority_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.issuerCertificateAuthorityId"></a>

```python
issuer_certificate_authority_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.signingAlgorithm"></a>

```python
signing_algorithm: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.subject"></a>

```python
subject: CertificatesManagementCertificateAuthoritySubjectList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList">CertificatesManagementCertificateAuthoritySubjectList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_of_deletion`<sup>Required</sup> <a name="time_of_deletion" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.timeOfDeletion"></a>

```python
time_of_deletion: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.timeouts"></a>

```python
timeouts: CertificatesManagementCertificateAuthorityTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference">CertificatesManagementCertificateAuthorityTimeoutsOutputReference</a>

---

##### `certificate_authority_config_input`<sup>Optional</sup> <a name="certificate_authority_config_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.certificateAuthorityConfigInput"></a>

```python
certificate_authority_config_input: CertificatesManagementCertificateAuthorityCertificateAuthorityConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig">CertificatesManagementCertificateAuthorityCertificateAuthorityConfig</a>

---

##### `certificate_authority_rules_input`<sup>Optional</sup> <a name="certificate_authority_rules_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.certificateAuthorityRulesInput"></a>

```python
certificate_authority_rules_input: typing.Union[IResolvable, typing.List[CertificatesManagementCertificateAuthorityCertificateAuthorityRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules">CertificatesManagementCertificateAuthorityCertificateAuthorityRules</a>]]

---

##### `certificate_revocation_list_details_input`<sup>Optional</sup> <a name="certificate_revocation_list_details_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.certificateRevocationListDetailsInput"></a>

```python
certificate_revocation_list_details_input: CertificatesManagementCertificateAuthorityCertificateRevocationListDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails">CertificatesManagementCertificateAuthorityCertificateRevocationListDetails</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CertificatesManagementCertificateAuthorityTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts">CertificatesManagementCertificateAuthorityTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CertificatesManagementCertificateAuthorityCertificateAuthorityConfig <a name="CertificatesManagementCertificateAuthorityCertificateAuthorityConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig(
  config_type: str,
  subject: CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject,
  issuer_certificate_authority_id: str = None,
  signing_algorithm: str = None,
  validity: CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity = None,
  version_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.property.configType">config_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#config_type CertificatesManagementCertificateAuthority#config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.property.subject">subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject</a></code> | subject block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.property.issuerCertificateAuthorityId">issuer_certificate_authority_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#issuer_certificate_authority_id CertificatesManagementCertificateAuthority#issuer_certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.property.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#signing_algorithm CertificatesManagementCertificateAuthority#signing_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.property.validity">validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity</a></code> | validity block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.property.versionName">version_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#version_name CertificatesManagementCertificateAuthority#version_name}. |

---

##### `config_type`<sup>Required</sup> <a name="config_type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.property.configType"></a>

```python
config_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#config_type CertificatesManagementCertificateAuthority#config_type}.

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.property.subject"></a>

```python
subject: CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject</a>

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#subject CertificatesManagementCertificateAuthority#subject}

---

##### `issuer_certificate_authority_id`<sup>Optional</sup> <a name="issuer_certificate_authority_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.property.issuerCertificateAuthorityId"></a>

```python
issuer_certificate_authority_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#issuer_certificate_authority_id CertificatesManagementCertificateAuthority#issuer_certificate_authority_id}.

---

##### `signing_algorithm`<sup>Optional</sup> <a name="signing_algorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.property.signingAlgorithm"></a>

```python
signing_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#signing_algorithm CertificatesManagementCertificateAuthority#signing_algorithm}.

---

##### `validity`<sup>Optional</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.property.validity"></a>

```python
validity: CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity</a>

validity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#validity CertificatesManagementCertificateAuthority#validity}

---

##### `version_name`<sup>Optional</sup> <a name="version_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#version_name CertificatesManagementCertificateAuthority#version_name}.

---

### CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject <a name="CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject(
  common_name: str,
  country: str = None,
  distinguished_name_qualifier: str = None,
  domain_component: str = None,
  generation_qualifier: str = None,
  given_name: str = None,
  initials: str = None,
  locality_name: str = None,
  organization: str = None,
  organizational_unit: str = None,
  pseudonym: str = None,
  serial_number: str = None,
  state_or_province_name: str = None,
  street: str = None,
  surname: str = None,
  title: str = None,
  user_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.commonName">common_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#common_name CertificatesManagementCertificateAuthority#common_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.country">country</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#country CertificatesManagementCertificateAuthority#country}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.distinguishedNameQualifier">distinguished_name_qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#distinguished_name_qualifier CertificatesManagementCertificateAuthority#distinguished_name_qualifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.domainComponent">domain_component</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#domain_component CertificatesManagementCertificateAuthority#domain_component}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.generationQualifier">generation_qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#generation_qualifier CertificatesManagementCertificateAuthority#generation_qualifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.givenName">given_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#given_name CertificatesManagementCertificateAuthority#given_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.initials">initials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#initials CertificatesManagementCertificateAuthority#initials}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.localityName">locality_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#locality_name CertificatesManagementCertificateAuthority#locality_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#organization CertificatesManagementCertificateAuthority#organization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#organizational_unit CertificatesManagementCertificateAuthority#organizational_unit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.pseudonym">pseudonym</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#pseudonym CertificatesManagementCertificateAuthority#pseudonym}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.serialNumber">serial_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#serial_number CertificatesManagementCertificateAuthority#serial_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.stateOrProvinceName">state_or_province_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#state_or_province_name CertificatesManagementCertificateAuthority#state_or_province_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.street">street</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#street CertificatesManagementCertificateAuthority#street}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.surname">surname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#surname CertificatesManagementCertificateAuthority#surname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#title CertificatesManagementCertificateAuthority#title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#user_id CertificatesManagementCertificateAuthority#user_id}. |

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#common_name CertificatesManagementCertificateAuthority#common_name}.

---

##### `country`<sup>Optional</sup> <a name="country" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.country"></a>

```python
country: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#country CertificatesManagementCertificateAuthority#country}.

---

##### `distinguished_name_qualifier`<sup>Optional</sup> <a name="distinguished_name_qualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.distinguishedNameQualifier"></a>

```python
distinguished_name_qualifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#distinguished_name_qualifier CertificatesManagementCertificateAuthority#distinguished_name_qualifier}.

---

##### `domain_component`<sup>Optional</sup> <a name="domain_component" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.domainComponent"></a>

```python
domain_component: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#domain_component CertificatesManagementCertificateAuthority#domain_component}.

---

##### `generation_qualifier`<sup>Optional</sup> <a name="generation_qualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.generationQualifier"></a>

```python
generation_qualifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#generation_qualifier CertificatesManagementCertificateAuthority#generation_qualifier}.

---

##### `given_name`<sup>Optional</sup> <a name="given_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#given_name CertificatesManagementCertificateAuthority#given_name}.

---

##### `initials`<sup>Optional</sup> <a name="initials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.initials"></a>

```python
initials: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#initials CertificatesManagementCertificateAuthority#initials}.

---

##### `locality_name`<sup>Optional</sup> <a name="locality_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.localityName"></a>

```python
locality_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#locality_name CertificatesManagementCertificateAuthority#locality_name}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.organization"></a>

```python
organization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#organization CertificatesManagementCertificateAuthority#organization}.

---

##### `organizational_unit`<sup>Optional</sup> <a name="organizational_unit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#organizational_unit CertificatesManagementCertificateAuthority#organizational_unit}.

---

##### `pseudonym`<sup>Optional</sup> <a name="pseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.pseudonym"></a>

```python
pseudonym: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#pseudonym CertificatesManagementCertificateAuthority#pseudonym}.

---

##### `serial_number`<sup>Optional</sup> <a name="serial_number" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#serial_number CertificatesManagementCertificateAuthority#serial_number}.

---

##### `state_or_province_name`<sup>Optional</sup> <a name="state_or_province_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.stateOrProvinceName"></a>

```python
state_or_province_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#state_or_province_name CertificatesManagementCertificateAuthority#state_or_province_name}.

---

##### `street`<sup>Optional</sup> <a name="street" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.street"></a>

```python
street: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#street CertificatesManagementCertificateAuthority#street}.

---

##### `surname`<sup>Optional</sup> <a name="surname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.surname"></a>

```python
surname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#surname CertificatesManagementCertificateAuthority#surname}.

---

##### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#title CertificatesManagementCertificateAuthority#title}.

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.userId"></a>

```python
user_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#user_id CertificatesManagementCertificateAuthority#user_id}.

---

### CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity <a name="CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity(
  time_of_validity_not_after: str,
  time_of_validity_not_before: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity.property.timeOfValidityNotAfter">time_of_validity_not_after</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#time_of_validity_not_after CertificatesManagementCertificateAuthority#time_of_validity_not_after}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity.property.timeOfValidityNotBefore">time_of_validity_not_before</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#time_of_validity_not_before CertificatesManagementCertificateAuthority#time_of_validity_not_before}. |

---

##### `time_of_validity_not_after`<sup>Required</sup> <a name="time_of_validity_not_after" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity.property.timeOfValidityNotAfter"></a>

```python
time_of_validity_not_after: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#time_of_validity_not_after CertificatesManagementCertificateAuthority#time_of_validity_not_after}.

---

##### `time_of_validity_not_before`<sup>Optional</sup> <a name="time_of_validity_not_before" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity.property.timeOfValidityNotBefore"></a>

```python
time_of_validity_not_before: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#time_of_validity_not_before CertificatesManagementCertificateAuthority#time_of_validity_not_before}.

---

### CertificatesManagementCertificateAuthorityCertificateAuthorityRules <a name="CertificatesManagementCertificateAuthorityCertificateAuthorityRules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules(
  rule_type: str,
  certificate_authority_max_validity_duration: str = None,
  leaf_certificate_max_validity_duration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules.property.ruleType">rule_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#rule_type CertificatesManagementCertificateAuthority#rule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules.property.certificateAuthorityMaxValidityDuration">certificate_authority_max_validity_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#certificate_authority_max_validity_duration CertificatesManagementCertificateAuthority#certificate_authority_max_validity_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules.property.leafCertificateMaxValidityDuration">leaf_certificate_max_validity_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#leaf_certificate_max_validity_duration CertificatesManagementCertificateAuthority#leaf_certificate_max_validity_duration}. |

---

##### `rule_type`<sup>Required</sup> <a name="rule_type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules.property.ruleType"></a>

```python
rule_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#rule_type CertificatesManagementCertificateAuthority#rule_type}.

---

##### `certificate_authority_max_validity_duration`<sup>Optional</sup> <a name="certificate_authority_max_validity_duration" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules.property.certificateAuthorityMaxValidityDuration"></a>

```python
certificate_authority_max_validity_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#certificate_authority_max_validity_duration CertificatesManagementCertificateAuthority#certificate_authority_max_validity_duration}.

---

##### `leaf_certificate_max_validity_duration`<sup>Optional</sup> <a name="leaf_certificate_max_validity_duration" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules.property.leafCertificateMaxValidityDuration"></a>

```python
leaf_certificate_max_validity_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#leaf_certificate_max_validity_duration CertificatesManagementCertificateAuthority#leaf_certificate_max_validity_duration}.

---

### CertificatesManagementCertificateAuthorityCertificateRevocationListDetails <a name="CertificatesManagementCertificateAuthorityCertificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails(
  object_storage_config: CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig,
  custom_formatted_urls: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails.property.objectStorageConfig">object_storage_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig">CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig</a></code> | object_storage_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails.property.customFormattedUrls">custom_formatted_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#custom_formatted_urls CertificatesManagementCertificateAuthority#custom_formatted_urls}. |

---

##### `object_storage_config`<sup>Required</sup> <a name="object_storage_config" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails.property.objectStorageConfig"></a>

```python
object_storage_config: CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig">CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig</a>

object_storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#object_storage_config CertificatesManagementCertificateAuthority#object_storage_config}

---

##### `custom_formatted_urls`<sup>Optional</sup> <a name="custom_formatted_urls" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails.property.customFormattedUrls"></a>

```python
custom_formatted_urls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#custom_formatted_urls CertificatesManagementCertificateAuthority#custom_formatted_urls}.

---

### CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig <a name="CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig(
  object_storage_bucket_name: str,
  object_storage_object_name_format: str,
  object_storage_namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig.property.objectStorageBucketName">object_storage_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#object_storage_bucket_name CertificatesManagementCertificateAuthority#object_storage_bucket_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig.property.objectStorageObjectNameFormat">object_storage_object_name_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#object_storage_object_name_format CertificatesManagementCertificateAuthority#object_storage_object_name_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig.property.objectStorageNamespace">object_storage_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#object_storage_namespace CertificatesManagementCertificateAuthority#object_storage_namespace}. |

---

##### `object_storage_bucket_name`<sup>Required</sup> <a name="object_storage_bucket_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig.property.objectStorageBucketName"></a>

```python
object_storage_bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#object_storage_bucket_name CertificatesManagementCertificateAuthority#object_storage_bucket_name}.

---

##### `object_storage_object_name_format`<sup>Required</sup> <a name="object_storage_object_name_format" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig.property.objectStorageObjectNameFormat"></a>

```python
object_storage_object_name_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#object_storage_object_name_format CertificatesManagementCertificateAuthority#object_storage_object_name_format}.

---

##### `object_storage_namespace`<sup>Optional</sup> <a name="object_storage_namespace" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig.property.objectStorageNamespace"></a>

```python
object_storage_namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#object_storage_namespace CertificatesManagementCertificateAuthority#object_storage_namespace}.

---

### CertificatesManagementCertificateAuthorityConfig <a name="CertificatesManagementCertificateAuthorityConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_authority_config: CertificatesManagementCertificateAuthorityCertificateAuthorityConfig,
  compartment_id: str,
  kms_key_id: str,
  name: str,
  certificate_authority_rules: typing.Union[IResolvable, typing.List[CertificatesManagementCertificateAuthorityCertificateAuthorityRules]] = None,
  certificate_revocation_list_details: CertificatesManagementCertificateAuthorityCertificateRevocationListDetails = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: CertificatesManagementCertificateAuthorityTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.certificateAuthorityConfig">certificate_authority_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig">CertificatesManagementCertificateAuthorityCertificateAuthorityConfig</a></code> | certificate_authority_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#compartment_id CertificatesManagementCertificateAuthority#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#kms_key_id CertificatesManagementCertificateAuthority#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#name CertificatesManagementCertificateAuthority#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.certificateAuthorityRules">certificate_authority_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules">CertificatesManagementCertificateAuthorityCertificateAuthorityRules</a>]]</code> | certificate_authority_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.certificateRevocationListDetails">certificate_revocation_list_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails">CertificatesManagementCertificateAuthorityCertificateRevocationListDetails</a></code> | certificate_revocation_list_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#defined_tags CertificatesManagementCertificateAuthority#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#description CertificatesManagementCertificateAuthority#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#freeform_tags CertificatesManagementCertificateAuthority#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#id CertificatesManagementCertificateAuthority#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts">CertificatesManagementCertificateAuthorityTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_authority_config`<sup>Required</sup> <a name="certificate_authority_config" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.certificateAuthorityConfig"></a>

```python
certificate_authority_config: CertificatesManagementCertificateAuthorityCertificateAuthorityConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig">CertificatesManagementCertificateAuthorityCertificateAuthorityConfig</a>

certificate_authority_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#certificate_authority_config CertificatesManagementCertificateAuthority#certificate_authority_config}

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#compartment_id CertificatesManagementCertificateAuthority#compartment_id}.

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#kms_key_id CertificatesManagementCertificateAuthority#kms_key_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#name CertificatesManagementCertificateAuthority#name}.

---

##### `certificate_authority_rules`<sup>Optional</sup> <a name="certificate_authority_rules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.certificateAuthorityRules"></a>

```python
certificate_authority_rules: typing.Union[IResolvable, typing.List[CertificatesManagementCertificateAuthorityCertificateAuthorityRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules">CertificatesManagementCertificateAuthorityCertificateAuthorityRules</a>]]

certificate_authority_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#certificate_authority_rules CertificatesManagementCertificateAuthority#certificate_authority_rules}

---

##### `certificate_revocation_list_details`<sup>Optional</sup> <a name="certificate_revocation_list_details" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.certificateRevocationListDetails"></a>

```python
certificate_revocation_list_details: CertificatesManagementCertificateAuthorityCertificateRevocationListDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails">CertificatesManagementCertificateAuthorityCertificateRevocationListDetails</a>

certificate_revocation_list_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#certificate_revocation_list_details CertificatesManagementCertificateAuthority#certificate_revocation_list_details}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#defined_tags CertificatesManagementCertificateAuthority#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#description CertificatesManagementCertificateAuthority#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#freeform_tags CertificatesManagementCertificateAuthority#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#id CertificatesManagementCertificateAuthority#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.timeouts"></a>

```python
timeouts: CertificatesManagementCertificateAuthorityTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts">CertificatesManagementCertificateAuthorityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#timeouts CertificatesManagementCertificateAuthority#timeouts}

---

### CertificatesManagementCertificateAuthorityCurrentVersion <a name="CertificatesManagementCertificateAuthorityCurrentVersion" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersion"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersion.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersion()
```


### CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus <a name="CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus()
```


### CertificatesManagementCertificateAuthorityCurrentVersionValidity <a name="CertificatesManagementCertificateAuthorityCurrentVersionValidity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidity.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidity()
```


### CertificatesManagementCertificateAuthoritySubject <a name="CertificatesManagementCertificateAuthoritySubject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubject.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubject()
```


### CertificatesManagementCertificateAuthorityTimeouts <a name="CertificatesManagementCertificateAuthorityTimeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#create CertificatesManagementCertificateAuthority#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#delete CertificatesManagementCertificateAuthority#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#update CertificatesManagementCertificateAuthority#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#create CertificatesManagementCertificateAuthority#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#delete CertificatesManagementCertificateAuthority#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#update CertificatesManagementCertificateAuthority#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference <a name="CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putSubject">put_subject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putValidity">put_validity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resetIssuerCertificateAuthorityId">reset_issuer_certificate_authority_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resetSigningAlgorithm">reset_signing_algorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resetValidity">reset_validity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resetVersionName">reset_version_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_subject` <a name="put_subject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putSubject"></a>

```python
def put_subject(
  common_name: str,
  country: str = None,
  distinguished_name_qualifier: str = None,
  domain_component: str = None,
  generation_qualifier: str = None,
  given_name: str = None,
  initials: str = None,
  locality_name: str = None,
  organization: str = None,
  organizational_unit: str = None,
  pseudonym: str = None,
  serial_number: str = None,
  state_or_province_name: str = None,
  street: str = None,
  surname: str = None,
  title: str = None,
  user_id: str = None
) -> None
```

###### `common_name`<sup>Required</sup> <a name="common_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putSubject.parameter.commonName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#common_name CertificatesManagementCertificateAuthority#common_name}.

---

###### `country`<sup>Optional</sup> <a name="country" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putSubject.parameter.country"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#country CertificatesManagementCertificateAuthority#country}.

---

###### `distinguished_name_qualifier`<sup>Optional</sup> <a name="distinguished_name_qualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putSubject.parameter.distinguishedNameQualifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#distinguished_name_qualifier CertificatesManagementCertificateAuthority#distinguished_name_qualifier}.

---

###### `domain_component`<sup>Optional</sup> <a name="domain_component" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putSubject.parameter.domainComponent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#domain_component CertificatesManagementCertificateAuthority#domain_component}.

---

###### `generation_qualifier`<sup>Optional</sup> <a name="generation_qualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putSubject.parameter.generationQualifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#generation_qualifier CertificatesManagementCertificateAuthority#generation_qualifier}.

---

###### `given_name`<sup>Optional</sup> <a name="given_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putSubject.parameter.givenName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#given_name CertificatesManagementCertificateAuthority#given_name}.

---

###### `initials`<sup>Optional</sup> <a name="initials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putSubject.parameter.initials"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#initials CertificatesManagementCertificateAuthority#initials}.

---

###### `locality_name`<sup>Optional</sup> <a name="locality_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putSubject.parameter.localityName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#locality_name CertificatesManagementCertificateAuthority#locality_name}.

---

###### `organization`<sup>Optional</sup> <a name="organization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putSubject.parameter.organization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#organization CertificatesManagementCertificateAuthority#organization}.

---

###### `organizational_unit`<sup>Optional</sup> <a name="organizational_unit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putSubject.parameter.organizationalUnit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#organizational_unit CertificatesManagementCertificateAuthority#organizational_unit}.

---

###### `pseudonym`<sup>Optional</sup> <a name="pseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putSubject.parameter.pseudonym"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#pseudonym CertificatesManagementCertificateAuthority#pseudonym}.

---

###### `serial_number`<sup>Optional</sup> <a name="serial_number" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putSubject.parameter.serialNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#serial_number CertificatesManagementCertificateAuthority#serial_number}.

---

###### `state_or_province_name`<sup>Optional</sup> <a name="state_or_province_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putSubject.parameter.stateOrProvinceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#state_or_province_name CertificatesManagementCertificateAuthority#state_or_province_name}.

---

###### `street`<sup>Optional</sup> <a name="street" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putSubject.parameter.street"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#street CertificatesManagementCertificateAuthority#street}.

---

###### `surname`<sup>Optional</sup> <a name="surname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putSubject.parameter.surname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#surname CertificatesManagementCertificateAuthority#surname}.

---

###### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putSubject.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#title CertificatesManagementCertificateAuthority#title}.

---

###### `user_id`<sup>Optional</sup> <a name="user_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putSubject.parameter.userId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#user_id CertificatesManagementCertificateAuthority#user_id}.

---

##### `put_validity` <a name="put_validity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putValidity"></a>

```python
def put_validity(
  time_of_validity_not_after: str,
  time_of_validity_not_before: str = None
) -> None
```

###### `time_of_validity_not_after`<sup>Required</sup> <a name="time_of_validity_not_after" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putValidity.parameter.timeOfValidityNotAfter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#time_of_validity_not_after CertificatesManagementCertificateAuthority#time_of_validity_not_after}.

---

###### `time_of_validity_not_before`<sup>Optional</sup> <a name="time_of_validity_not_before" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putValidity.parameter.timeOfValidityNotBefore"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#time_of_validity_not_before CertificatesManagementCertificateAuthority#time_of_validity_not_before}.

---

##### `reset_issuer_certificate_authority_id` <a name="reset_issuer_certificate_authority_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resetIssuerCertificateAuthorityId"></a>

```python
def reset_issuer_certificate_authority_id() -> None
```

##### `reset_signing_algorithm` <a name="reset_signing_algorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resetSigningAlgorithm"></a>

```python
def reset_signing_algorithm() -> None
```

##### `reset_validity` <a name="reset_validity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resetValidity"></a>

```python
def reset_validity() -> None
```

##### `reset_version_name` <a name="reset_version_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resetVersionName"></a>

```python
def reset_version_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.subject">subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.validity">validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.configTypeInput">config_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.issuerCertificateAuthorityIdInput">issuer_certificate_authority_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.signingAlgorithmInput">signing_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.subjectInput">subject_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.validityInput">validity_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.versionNameInput">version_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.configType">config_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.issuerCertificateAuthorityId">issuer_certificate_authority_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.versionName">version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig">CertificatesManagementCertificateAuthorityCertificateAuthorityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.subject"></a>

```python
subject: CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference</a>

---

##### `validity`<sup>Required</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.validity"></a>

```python
validity: CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference</a>

---

##### `config_type_input`<sup>Optional</sup> <a name="config_type_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.configTypeInput"></a>

```python
config_type_input: str
```

- *Type:* str

---

##### `issuer_certificate_authority_id_input`<sup>Optional</sup> <a name="issuer_certificate_authority_id_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.issuerCertificateAuthorityIdInput"></a>

```python
issuer_certificate_authority_id_input: str
```

- *Type:* str

---

##### `signing_algorithm_input`<sup>Optional</sup> <a name="signing_algorithm_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.signingAlgorithmInput"></a>

```python
signing_algorithm_input: str
```

- *Type:* str

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.subjectInput"></a>

```python
subject_input: CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject</a>

---

##### `validity_input`<sup>Optional</sup> <a name="validity_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.validityInput"></a>

```python
validity_input: CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity</a>

---

##### `version_name_input`<sup>Optional</sup> <a name="version_name_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.versionNameInput"></a>

```python
version_name_input: str
```

- *Type:* str

---

##### `config_type`<sup>Required</sup> <a name="config_type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.configType"></a>

```python
config_type: str
```

- *Type:* str

---

##### `issuer_certificate_authority_id`<sup>Required</sup> <a name="issuer_certificate_authority_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.issuerCertificateAuthorityId"></a>

```python
issuer_certificate_authority_id: str
```

- *Type:* str

---

##### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.signingAlgorithm"></a>

```python
signing_algorithm: str
```

- *Type:* str

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.internalValue"></a>

```python
internal_value: CertificatesManagementCertificateAuthorityCertificateAuthorityConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig">CertificatesManagementCertificateAuthorityCertificateAuthorityConfig</a>

---


### CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference <a name="CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetDistinguishedNameQualifier">reset_distinguished_name_qualifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetDomainComponent">reset_domain_component</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetGenerationQualifier">reset_generation_qualifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetGivenName">reset_given_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetInitials">reset_initials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetLocalityName">reset_locality_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetOrganizationalUnit">reset_organizational_unit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetPseudonym">reset_pseudonym</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetSerialNumber">reset_serial_number</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetStateOrProvinceName">reset_state_or_province_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetStreet">reset_street</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetSurname">reset_surname</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetTitle">reset_title</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_country` <a name="reset_country" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_distinguished_name_qualifier` <a name="reset_distinguished_name_qualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetDistinguishedNameQualifier"></a>

```python
def reset_distinguished_name_qualifier() -> None
```

##### `reset_domain_component` <a name="reset_domain_component" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetDomainComponent"></a>

```python
def reset_domain_component() -> None
```

##### `reset_generation_qualifier` <a name="reset_generation_qualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetGenerationQualifier"></a>

```python
def reset_generation_qualifier() -> None
```

##### `reset_given_name` <a name="reset_given_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetGivenName"></a>

```python
def reset_given_name() -> None
```

##### `reset_initials` <a name="reset_initials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetInitials"></a>

```python
def reset_initials() -> None
```

##### `reset_locality_name` <a name="reset_locality_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetLocalityName"></a>

```python
def reset_locality_name() -> None
```

##### `reset_organization` <a name="reset_organization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_organizational_unit` <a name="reset_organizational_unit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetOrganizationalUnit"></a>

```python
def reset_organizational_unit() -> None
```

##### `reset_pseudonym` <a name="reset_pseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetPseudonym"></a>

```python
def reset_pseudonym() -> None
```

##### `reset_serial_number` <a name="reset_serial_number" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetSerialNumber"></a>

```python
def reset_serial_number() -> None
```

##### `reset_state_or_province_name` <a name="reset_state_or_province_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetStateOrProvinceName"></a>

```python
def reset_state_or_province_name() -> None
```

##### `reset_street` <a name="reset_street" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetStreet"></a>

```python
def reset_street() -> None
```

##### `reset_surname` <a name="reset_surname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetSurname"></a>

```python
def reset_surname() -> None
```

##### `reset_title` <a name="reset_title" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetUserId"></a>

```python
def reset_user_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.commonNameInput">common_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.distinguishedNameQualifierInput">distinguished_name_qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.domainComponentInput">domain_component_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.generationQualifierInput">generation_qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.givenNameInput">given_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.initialsInput">initials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.localityNameInput">locality_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.organizationalUnitInput">organizational_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.pseudonymInput">pseudonym_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.serialNumberInput">serial_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.stateOrProvinceNameInput">state_or_province_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.streetInput">street_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.surnameInput">surname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.distinguishedNameQualifier">distinguished_name_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.domainComponent">domain_component</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.generationQualifier">generation_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.givenName">given_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.initials">initials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.localityName">locality_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.pseudonym">pseudonym</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.stateOrProvinceName">state_or_province_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.street">street</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.surname">surname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.commonNameInput"></a>

```python
common_name_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `distinguished_name_qualifier_input`<sup>Optional</sup> <a name="distinguished_name_qualifier_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.distinguishedNameQualifierInput"></a>

```python
distinguished_name_qualifier_input: str
```

- *Type:* str

---

##### `domain_component_input`<sup>Optional</sup> <a name="domain_component_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.domainComponentInput"></a>

```python
domain_component_input: str
```

- *Type:* str

---

##### `generation_qualifier_input`<sup>Optional</sup> <a name="generation_qualifier_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.generationQualifierInput"></a>

```python
generation_qualifier_input: str
```

- *Type:* str

---

##### `given_name_input`<sup>Optional</sup> <a name="given_name_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.givenNameInput"></a>

```python
given_name_input: str
```

- *Type:* str

---

##### `initials_input`<sup>Optional</sup> <a name="initials_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.initialsInput"></a>

```python
initials_input: str
```

- *Type:* str

---

##### `locality_name_input`<sup>Optional</sup> <a name="locality_name_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.localityNameInput"></a>

```python
locality_name_input: str
```

- *Type:* str

---

##### `organizational_unit_input`<sup>Optional</sup> <a name="organizational_unit_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.organizationalUnitInput"></a>

```python
organizational_unit_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `pseudonym_input`<sup>Optional</sup> <a name="pseudonym_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.pseudonymInput"></a>

```python
pseudonym_input: str
```

- *Type:* str

---

##### `serial_number_input`<sup>Optional</sup> <a name="serial_number_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.serialNumberInput"></a>

```python
serial_number_input: str
```

- *Type:* str

---

##### `state_or_province_name_input`<sup>Optional</sup> <a name="state_or_province_name_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.stateOrProvinceNameInput"></a>

```python
state_or_province_name_input: str
```

- *Type:* str

---

##### `street_input`<sup>Optional</sup> <a name="street_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.streetInput"></a>

```python
street_input: str
```

- *Type:* str

---

##### `surname_input`<sup>Optional</sup> <a name="surname_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.surnameInput"></a>

```python
surname_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `distinguished_name_qualifier`<sup>Required</sup> <a name="distinguished_name_qualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.distinguishedNameQualifier"></a>

```python
distinguished_name_qualifier: str
```

- *Type:* str

---

##### `domain_component`<sup>Required</sup> <a name="domain_component" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.domainComponent"></a>

```python
domain_component: str
```

- *Type:* str

---

##### `generation_qualifier`<sup>Required</sup> <a name="generation_qualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.generationQualifier"></a>

```python
generation_qualifier: str
```

- *Type:* str

---

##### `given_name`<sup>Required</sup> <a name="given_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

---

##### `initials`<sup>Required</sup> <a name="initials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.initials"></a>

```python
initials: str
```

- *Type:* str

---

##### `locality_name`<sup>Required</sup> <a name="locality_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.localityName"></a>

```python
locality_name: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `organizational_unit`<sup>Required</sup> <a name="organizational_unit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.pseudonym"></a>

```python
pseudonym: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `state_or_province_name`<sup>Required</sup> <a name="state_or_province_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.stateOrProvinceName"></a>

```python
state_or_province_name: str
```

- *Type:* str

---

##### `street`<sup>Required</sup> <a name="street" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.street"></a>

```python
street: str
```

- *Type:* str

---

##### `surname`<sup>Required</sup> <a name="surname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.surname"></a>

```python
surname: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.internalValue"></a>

```python
internal_value: CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject</a>

---


### CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference <a name="CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.resetTimeOfValidityNotBefore">reset_time_of_validity_not_before</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_time_of_validity_not_before` <a name="reset_time_of_validity_not_before" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.resetTimeOfValidityNotBefore"></a>

```python
def reset_time_of_validity_not_before() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotAfterInput">time_of_validity_not_after_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotBeforeInput">time_of_validity_not_before_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotAfter">time_of_validity_not_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotBefore">time_of_validity_not_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_of_validity_not_after_input`<sup>Optional</sup> <a name="time_of_validity_not_after_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotAfterInput"></a>

```python
time_of_validity_not_after_input: str
```

- *Type:* str

---

##### `time_of_validity_not_before_input`<sup>Optional</sup> <a name="time_of_validity_not_before_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotBeforeInput"></a>

```python
time_of_validity_not_before_input: str
```

- *Type:* str

---

##### `time_of_validity_not_after`<sup>Required</sup> <a name="time_of_validity_not_after" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotAfter"></a>

```python
time_of_validity_not_after: str
```

- *Type:* str

---

##### `time_of_validity_not_before`<sup>Required</sup> <a name="time_of_validity_not_before" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotBefore"></a>

```python
time_of_validity_not_before: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.internalValue"></a>

```python
internal_value: CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity</a>

---


### CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList <a name="CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules">CertificatesManagementCertificateAuthorityCertificateAuthorityRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CertificatesManagementCertificateAuthorityCertificateAuthorityRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules">CertificatesManagementCertificateAuthorityCertificateAuthorityRules</a>]]

---


### CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference <a name="CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.resetCertificateAuthorityMaxValidityDuration">reset_certificate_authority_max_validity_duration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.resetLeafCertificateMaxValidityDuration">reset_leaf_certificate_max_validity_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_authority_max_validity_duration` <a name="reset_certificate_authority_max_validity_duration" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.resetCertificateAuthorityMaxValidityDuration"></a>

```python
def reset_certificate_authority_max_validity_duration() -> None
```

##### `reset_leaf_certificate_max_validity_duration` <a name="reset_leaf_certificate_max_validity_duration" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.resetLeafCertificateMaxValidityDuration"></a>

```python
def reset_leaf_certificate_max_validity_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.certificateAuthorityMaxValidityDurationInput">certificate_authority_max_validity_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.leafCertificateMaxValidityDurationInput">leaf_certificate_max_validity_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.ruleTypeInput">rule_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.certificateAuthorityMaxValidityDuration">certificate_authority_max_validity_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.leafCertificateMaxValidityDuration">leaf_certificate_max_validity_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.ruleType">rule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules">CertificatesManagementCertificateAuthorityCertificateAuthorityRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_authority_max_validity_duration_input`<sup>Optional</sup> <a name="certificate_authority_max_validity_duration_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.certificateAuthorityMaxValidityDurationInput"></a>

```python
certificate_authority_max_validity_duration_input: str
```

- *Type:* str

---

##### `leaf_certificate_max_validity_duration_input`<sup>Optional</sup> <a name="leaf_certificate_max_validity_duration_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.leafCertificateMaxValidityDurationInput"></a>

```python
leaf_certificate_max_validity_duration_input: str
```

- *Type:* str

---

##### `rule_type_input`<sup>Optional</sup> <a name="rule_type_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.ruleTypeInput"></a>

```python
rule_type_input: str
```

- *Type:* str

---

##### `certificate_authority_max_validity_duration`<sup>Required</sup> <a name="certificate_authority_max_validity_duration" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.certificateAuthorityMaxValidityDuration"></a>

```python
certificate_authority_max_validity_duration: str
```

- *Type:* str

---

##### `leaf_certificate_max_validity_duration`<sup>Required</sup> <a name="leaf_certificate_max_validity_duration" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.leafCertificateMaxValidityDuration"></a>

```python
leaf_certificate_max_validity_duration: str
```

- *Type:* str

---

##### `rule_type`<sup>Required</sup> <a name="rule_type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.ruleType"></a>

```python
rule_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CertificatesManagementCertificateAuthorityCertificateAuthorityRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules">CertificatesManagementCertificateAuthorityCertificateAuthorityRules</a>]

---


### CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference <a name="CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.resetObjectStorageNamespace">reset_object_storage_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_object_storage_namespace` <a name="reset_object_storage_namespace" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.resetObjectStorageNamespace"></a>

```python
def reset_object_storage_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketNameInput">object_storage_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespaceInput">object_storage_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormatInput">object_storage_object_name_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName">object_storage_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace">object_storage_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat">object_storage_object_name_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig">CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_storage_bucket_name_input`<sup>Optional</sup> <a name="object_storage_bucket_name_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketNameInput"></a>

```python
object_storage_bucket_name_input: str
```

- *Type:* str

---

##### `object_storage_namespace_input`<sup>Optional</sup> <a name="object_storage_namespace_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespaceInput"></a>

```python
object_storage_namespace_input: str
```

- *Type:* str

---

##### `object_storage_object_name_format_input`<sup>Optional</sup> <a name="object_storage_object_name_format_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormatInput"></a>

```python
object_storage_object_name_format_input: str
```

- *Type:* str

---

##### `object_storage_bucket_name`<sup>Required</sup> <a name="object_storage_bucket_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName"></a>

```python
object_storage_bucket_name: str
```

- *Type:* str

---

##### `object_storage_namespace`<sup>Required</sup> <a name="object_storage_namespace" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace"></a>

```python
object_storage_namespace: str
```

- *Type:* str

---

##### `object_storage_object_name_format`<sup>Required</sup> <a name="object_storage_object_name_format" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat"></a>

```python
object_storage_object_name_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue"></a>

```python
internal_value: CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig">CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig</a>

---


### CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference <a name="CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.putObjectStorageConfig">put_object_storage_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.resetCustomFormattedUrls">reset_custom_formatted_urls</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_object_storage_config` <a name="put_object_storage_config" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.putObjectStorageConfig"></a>

```python
def put_object_storage_config(
  object_storage_bucket_name: str,
  object_storage_object_name_format: str,
  object_storage_namespace: str = None
) -> None
```

###### `object_storage_bucket_name`<sup>Required</sup> <a name="object_storage_bucket_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.putObjectStorageConfig.parameter.objectStorageBucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#object_storage_bucket_name CertificatesManagementCertificateAuthority#object_storage_bucket_name}.

---

###### `object_storage_object_name_format`<sup>Required</sup> <a name="object_storage_object_name_format" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.putObjectStorageConfig.parameter.objectStorageObjectNameFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#object_storage_object_name_format CertificatesManagementCertificateAuthority#object_storage_object_name_format}.

---

###### `object_storage_namespace`<sup>Optional</sup> <a name="object_storage_namespace" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.putObjectStorageConfig.parameter.objectStorageNamespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#object_storage_namespace CertificatesManagementCertificateAuthority#object_storage_namespace}.

---

##### `reset_custom_formatted_urls` <a name="reset_custom_formatted_urls" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.resetCustomFormattedUrls"></a>

```python
def reset_custom_formatted_urls() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.objectStorageConfig">object_storage_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference">CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.customFormattedUrlsInput">custom_formatted_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.objectStorageConfigInput">object_storage_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig">CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.customFormattedUrls">custom_formatted_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails">CertificatesManagementCertificateAuthorityCertificateRevocationListDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_storage_config`<sup>Required</sup> <a name="object_storage_config" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.objectStorageConfig"></a>

```python
object_storage_config: CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference">CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference</a>

---

##### `custom_formatted_urls_input`<sup>Optional</sup> <a name="custom_formatted_urls_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.customFormattedUrlsInput"></a>

```python
custom_formatted_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `object_storage_config_input`<sup>Optional</sup> <a name="object_storage_config_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.objectStorageConfigInput"></a>

```python
object_storage_config_input: CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig">CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig</a>

---

##### `custom_formatted_urls`<sup>Required</sup> <a name="custom_formatted_urls" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.customFormattedUrls"></a>

```python
custom_formatted_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.internalValue"></a>

```python
internal_value: CertificatesManagementCertificateAuthorityCertificateRevocationListDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails">CertificatesManagementCertificateAuthorityCertificateRevocationListDetails</a>

---


### CertificatesManagementCertificateAuthorityCurrentVersionList <a name="CertificatesManagementCertificateAuthorityCurrentVersionList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificatesManagementCertificateAuthorityCurrentVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CertificatesManagementCertificateAuthorityCurrentVersionOutputReference <a name="CertificatesManagementCertificateAuthorityCurrentVersionOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.certificateAuthorityId">certificate_authority_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.issuerCaVersionNumber">issuer_ca_version_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.revocationStatus">revocation_status</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList">CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.stages">stages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.timeOfDeletion">time_of_deletion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.validity">validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList">CertificatesManagementCertificateAuthorityCurrentVersionValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.versionName">version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.versionNumber">version_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersion">CertificatesManagementCertificateAuthorityCurrentVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_authority_id`<sup>Required</sup> <a name="certificate_authority_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.certificateAuthorityId"></a>

```python
certificate_authority_id: str
```

- *Type:* str

---

##### `issuer_ca_version_number`<sup>Required</sup> <a name="issuer_ca_version_number" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.issuerCaVersionNumber"></a>

```python
issuer_ca_version_number: str
```

- *Type:* str

---

##### `revocation_status`<sup>Required</sup> <a name="revocation_status" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.revocationStatus"></a>

```python
revocation_status: CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList">CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList</a>

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `stages`<sup>Required</sup> <a name="stages" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.stages"></a>

```python
stages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_of_deletion`<sup>Required</sup> <a name="time_of_deletion" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.timeOfDeletion"></a>

```python
time_of_deletion: str
```

- *Type:* str

---

##### `validity`<sup>Required</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.validity"></a>

```python
validity: CertificatesManagementCertificateAuthorityCurrentVersionValidityList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList">CertificatesManagementCertificateAuthorityCurrentVersionValidityList</a>

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

---

##### `version_number`<sup>Required</sup> <a name="version_number" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.versionNumber"></a>

```python
version_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.internalValue"></a>

```python
internal_value: CertificatesManagementCertificateAuthorityCurrentVersion
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersion">CertificatesManagementCertificateAuthorityCurrentVersion</a>

---


### CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList <a name="CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference <a name="CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.revocationReason">revocation_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation">time_of_revocation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus">CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `revocation_reason`<sup>Required</sup> <a name="revocation_reason" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.revocationReason"></a>

```python
revocation_reason: str
```

- *Type:* str

---

##### `time_of_revocation`<sup>Required</sup> <a name="time_of_revocation" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation"></a>

```python
time_of_revocation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.internalValue"></a>

```python
internal_value: CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus">CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus</a>

---


### CertificatesManagementCertificateAuthorityCurrentVersionValidityList <a name="CertificatesManagementCertificateAuthorityCurrentVersionValidityList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference <a name="CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter">time_of_validity_not_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore">time_of_validity_not_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidity">CertificatesManagementCertificateAuthorityCurrentVersionValidity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_of_validity_not_after`<sup>Required</sup> <a name="time_of_validity_not_after" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter"></a>

```python
time_of_validity_not_after: str
```

- *Type:* str

---

##### `time_of_validity_not_before`<sup>Required</sup> <a name="time_of_validity_not_before" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore"></a>

```python
time_of_validity_not_before: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.internalValue"></a>

```python
internal_value: CertificatesManagementCertificateAuthorityCurrentVersionValidity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidity">CertificatesManagementCertificateAuthorityCurrentVersionValidity</a>

---


### CertificatesManagementCertificateAuthoritySubjectList <a name="CertificatesManagementCertificateAuthoritySubjectList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificatesManagementCertificateAuthoritySubjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CertificatesManagementCertificateAuthoritySubjectOutputReference <a name="CertificatesManagementCertificateAuthoritySubjectOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.distinguishedNameQualifier">distinguished_name_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.domainComponent">domain_component</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.generationQualifier">generation_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.givenName">given_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.initials">initials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.localityName">locality_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.pseudonym">pseudonym</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.stateOrProvinceName">state_or_province_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.street">street</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.surname">surname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubject">CertificatesManagementCertificateAuthoritySubject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `distinguished_name_qualifier`<sup>Required</sup> <a name="distinguished_name_qualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.distinguishedNameQualifier"></a>

```python
distinguished_name_qualifier: str
```

- *Type:* str

---

##### `domain_component`<sup>Required</sup> <a name="domain_component" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.domainComponent"></a>

```python
domain_component: str
```

- *Type:* str

---

##### `generation_qualifier`<sup>Required</sup> <a name="generation_qualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.generationQualifier"></a>

```python
generation_qualifier: str
```

- *Type:* str

---

##### `given_name`<sup>Required</sup> <a name="given_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

---

##### `initials`<sup>Required</sup> <a name="initials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.initials"></a>

```python
initials: str
```

- *Type:* str

---

##### `locality_name`<sup>Required</sup> <a name="locality_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.localityName"></a>

```python
locality_name: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `organizational_unit`<sup>Required</sup> <a name="organizational_unit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.pseudonym"></a>

```python
pseudonym: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `state_or_province_name`<sup>Required</sup> <a name="state_or_province_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.stateOrProvinceName"></a>

```python
state_or_province_name: str
```

- *Type:* str

---

##### `street`<sup>Required</sup> <a name="street" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.street"></a>

```python
street: str
```

- *Type:* str

---

##### `surname`<sup>Required</sup> <a name="surname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.surname"></a>

```python
surname: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.internalValue"></a>

```python
internal_value: CertificatesManagementCertificateAuthoritySubject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubject">CertificatesManagementCertificateAuthoritySubject</a>

---


### CertificatesManagementCertificateAuthorityTimeoutsOutputReference <a name="CertificatesManagementCertificateAuthorityTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate_authority

certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts">CertificatesManagementCertificateAuthorityTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CertificatesManagementCertificateAuthorityTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts">CertificatesManagementCertificateAuthorityTimeouts</a>]

---



