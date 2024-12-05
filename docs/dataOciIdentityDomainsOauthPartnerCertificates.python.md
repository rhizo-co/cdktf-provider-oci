# `dataOciIdentityDomainsOauthPartnerCertificates` Submodule <a name="`dataOciIdentityDomainsOauthPartnerCertificates` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsOauthPartnerCertificates <a name="DataOciIdentityDomainsOauthPartnerCertificates" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates oci_identity_domains_oauth_partner_certificates}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oauth_partner_certificates

dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  authorization: str = None,
  compartment_id: str = None,
  id: str = None,
  oauth_partner_certificate_count: typing.Union[int, float] = None,
  oauth_partner_certificate_filter: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#idcs_endpoint DataOciIdentityDomainsOauthPartnerCertificates#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#authorization DataOciIdentityDomainsOauthPartnerCertificates#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#compartment_id DataOciIdentityDomainsOauthPartnerCertificates#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#id DataOciIdentityDomainsOauthPartnerCertificates#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.oauthPartnerCertificateCount">oauth_partner_certificate_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#oauth_partner_certificate_count DataOciIdentityDomainsOauthPartnerCertificates#oauth_partner_certificate_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.oauthPartnerCertificateFilter">oauth_partner_certificate_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#oauth_partner_certificate_filter DataOciIdentityDomainsOauthPartnerCertificates#oauth_partner_certificate_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#resource_type_schema_version DataOciIdentityDomainsOauthPartnerCertificates#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#sort_by DataOciIdentityDomainsOauthPartnerCertificates#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#sort_order DataOciIdentityDomainsOauthPartnerCertificates#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#start_index DataOciIdentityDomainsOauthPartnerCertificates#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#idcs_endpoint DataOciIdentityDomainsOauthPartnerCertificates#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#authorization DataOciIdentityDomainsOauthPartnerCertificates#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#compartment_id DataOciIdentityDomainsOauthPartnerCertificates#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#id DataOciIdentityDomainsOauthPartnerCertificates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oauth_partner_certificate_count`<sup>Optional</sup> <a name="oauth_partner_certificate_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.oauthPartnerCertificateCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#oauth_partner_certificate_count DataOciIdentityDomainsOauthPartnerCertificates#oauth_partner_certificate_count}.

---

##### `oauth_partner_certificate_filter`<sup>Optional</sup> <a name="oauth_partner_certificate_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.oauthPartnerCertificateFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#oauth_partner_certificate_filter DataOciIdentityDomainsOauthPartnerCertificates#oauth_partner_certificate_filter}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#resource_type_schema_version DataOciIdentityDomainsOauthPartnerCertificates#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.sortBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#sort_by DataOciIdentityDomainsOauthPartnerCertificates#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.sortOrder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#sort_order DataOciIdentityDomainsOauthPartnerCertificates#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.startIndex"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#start_index DataOciIdentityDomainsOauthPartnerCertificates#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetOauthPartnerCertificateCount">reset_oauth_partner_certificate_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetOauthPartnerCertificateFilter">reset_oauth_partner_certificate_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetSortBy">reset_sort_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetSortOrder">reset_sort_order</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetStartIndex">reset_start_index</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_oauth_partner_certificate_count` <a name="reset_oauth_partner_certificate_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetOauthPartnerCertificateCount"></a>

```python
def reset_oauth_partner_certificate_count() -> None
```

##### `reset_oauth_partner_certificate_filter` <a name="reset_oauth_partner_certificate_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetOauthPartnerCertificateFilter"></a>

```python
def reset_oauth_partner_certificate_filter() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_sort_by` <a name="reset_sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetSortBy"></a>

```python
def reset_sort_by() -> None
```

##### `reset_sort_order` <a name="reset_sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetSortOrder"></a>

```python
def reset_sort_order() -> None
```

##### `reset_start_index` <a name="reset_start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetStartIndex"></a>

```python
def reset_start_index() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsOauthPartnerCertificates resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oauth_partner_certificates

dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oauth_partner_certificates

dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oauth_partner_certificates

dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oauth_partner_certificates

dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsOauthPartnerCertificates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsOauthPartnerCertificates to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsOauthPartnerCertificates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsOauthPartnerCertificates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.oauthPartnerCertificates">oauth_partner_certificates</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.totalResults">total_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.oauthPartnerCertificateCountInput">oauth_partner_certificate_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.oauthPartnerCertificateFilterInput">oauth_partner_certificate_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.sortByInput">sort_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.sortOrderInput">sort_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.startIndexInput">start_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.oauthPartnerCertificateCount">oauth_partner_certificate_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.oauthPartnerCertificateFilter">oauth_partner_certificate_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.sortBy">sort_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.sortOrder">sort_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oauth_partner_certificates`<sup>Required</sup> <a name="oauth_partner_certificates" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.oauthPartnerCertificates"></a>

```python
oauth_partner_certificates: DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `total_results`<sup>Required</sup> <a name="total_results" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.totalResults"></a>

```python
total_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `oauth_partner_certificate_count_input`<sup>Optional</sup> <a name="oauth_partner_certificate_count_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.oauthPartnerCertificateCountInput"></a>

```python
oauth_partner_certificate_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oauth_partner_certificate_filter_input`<sup>Optional</sup> <a name="oauth_partner_certificate_filter_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.oauthPartnerCertificateFilterInput"></a>

```python
oauth_partner_certificate_filter_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `sort_by_input`<sup>Optional</sup> <a name="sort_by_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.sortByInput"></a>

```python
sort_by_input: str
```

- *Type:* str

---

##### `sort_order_input`<sup>Optional</sup> <a name="sort_order_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.sortOrderInput"></a>

```python
sort_order_input: str
```

- *Type:* str

---

##### `start_index_input`<sup>Optional</sup> <a name="start_index_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.startIndexInput"></a>

```python
start_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `oauth_partner_certificate_count`<sup>Required</sup> <a name="oauth_partner_certificate_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.oauthPartnerCertificateCount"></a>

```python
oauth_partner_certificate_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oauth_partner_certificate_filter`<sup>Required</sup> <a name="oauth_partner_certificate_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.oauthPartnerCertificateFilter"></a>

```python
oauth_partner_certificate_filter: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `sort_by`<sup>Required</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

---

##### `start_index`<sup>Required</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsOauthPartnerCertificatesConfig <a name="DataOciIdentityDomainsOauthPartnerCertificatesConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oauth_partner_certificates

dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  authorization: str = None,
  compartment_id: str = None,
  id: str = None,
  oauth_partner_certificate_count: typing.Union[int, float] = None,
  oauth_partner_certificate_filter: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#idcs_endpoint DataOciIdentityDomainsOauthPartnerCertificates#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#authorization DataOciIdentityDomainsOauthPartnerCertificates#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#compartment_id DataOciIdentityDomainsOauthPartnerCertificates#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#id DataOciIdentityDomainsOauthPartnerCertificates#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.oauthPartnerCertificateCount">oauth_partner_certificate_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#oauth_partner_certificate_count DataOciIdentityDomainsOauthPartnerCertificates#oauth_partner_certificate_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.oauthPartnerCertificateFilter">oauth_partner_certificate_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#oauth_partner_certificate_filter DataOciIdentityDomainsOauthPartnerCertificates#oauth_partner_certificate_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#resource_type_schema_version DataOciIdentityDomainsOauthPartnerCertificates#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#sort_by DataOciIdentityDomainsOauthPartnerCertificates#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#sort_order DataOciIdentityDomainsOauthPartnerCertificates#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#start_index DataOciIdentityDomainsOauthPartnerCertificates#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#idcs_endpoint DataOciIdentityDomainsOauthPartnerCertificates#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#authorization DataOciIdentityDomainsOauthPartnerCertificates#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#compartment_id DataOciIdentityDomainsOauthPartnerCertificates#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#id DataOciIdentityDomainsOauthPartnerCertificates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oauth_partner_certificate_count`<sup>Optional</sup> <a name="oauth_partner_certificate_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.oauthPartnerCertificateCount"></a>

```python
oauth_partner_certificate_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#oauth_partner_certificate_count DataOciIdentityDomainsOauthPartnerCertificates#oauth_partner_certificate_count}.

---

##### `oauth_partner_certificate_filter`<sup>Optional</sup> <a name="oauth_partner_certificate_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.oauthPartnerCertificateFilter"></a>

```python
oauth_partner_certificate_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#oauth_partner_certificate_filter DataOciIdentityDomainsOauthPartnerCertificates#oauth_partner_certificate_filter}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#resource_type_schema_version DataOciIdentityDomainsOauthPartnerCertificates#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#sort_by DataOciIdentityDomainsOauthPartnerCertificates#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#sort_order DataOciIdentityDomainsOauthPartnerCertificates#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#start_index DataOciIdentityDomainsOauthPartnerCertificates#start_index}.

---

### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificates <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificates" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificates"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificates.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oauth_partner_certificates

dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificates()
```


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedBy <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oauth_partner_certificates

dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedBy()
```


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedBy <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oauth_partner_certificates

dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedBy()
```


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMeta <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oauth_partner_certificates

dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMeta()
```


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTags <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oauth_partner_certificates

dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oauth_partner_certificates

dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oauth_partner_certificates

dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedBy">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedBy">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedBy</a>

---


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oauth_partner_certificates

dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oauth_partner_certificates

dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedBy">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedBy">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oauth_partner_certificates

dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oauth_partner_certificates

dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oauth_partner_certificates

dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMeta">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMeta">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMeta</a>

---


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oauth_partner_certificates

dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.certEndDate">cert_end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.certificateAlias">certificate_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.certStartDate">cert_start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.keyStoreId">key_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.keyStoreName">key_store_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.keyStorePassword">key_store_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.map">map</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.sha1Thumbprint">sha1_thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.sha256Thumbprint">sha256_thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.x509Base64Certificate">x509_base64_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificates">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `cert_end_date`<sup>Required</sup> <a name="cert_end_date" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.certEndDate"></a>

```python
cert_end_date: str
```

- *Type:* str

---

##### `certificate_alias`<sup>Required</sup> <a name="certificate_alias" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.certificateAlias"></a>

```python
certificate_alias: str
```

- *Type:* str

---

##### `cert_start_date`<sup>Required</sup> <a name="cert_start_date" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.certStartDate"></a>

```python
cert_start_date: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList</a>

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_store_id`<sup>Required</sup> <a name="key_store_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.keyStoreId"></a>

```python
key_store_id: str
```

- *Type:* str

---

##### `key_store_name`<sup>Required</sup> <a name="key_store_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.keyStoreName"></a>

```python
key_store_name: str
```

- *Type:* str

---

##### `key_store_password`<sup>Required</sup> <a name="key_store_password" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.keyStorePassword"></a>

```python
key_store_password: str
```

- *Type:* str

---

##### `map`<sup>Required</sup> <a name="map" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.map"></a>

```python
map: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.meta"></a>

```python
meta: DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sha1_thumbprint`<sup>Required</sup> <a name="sha1_thumbprint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.sha1Thumbprint"></a>

```python
sha1_thumbprint: str
```

- *Type:* str

---

##### `sha256_thumbprint`<sup>Required</sup> <a name="sha256_thumbprint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.sha256Thumbprint"></a>

```python
sha256_thumbprint: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.tags"></a>

```python
tags: DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `x509_base64_certificate`<sup>Required</sup> <a name="x509_base64_certificate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.x509Base64Certificate"></a>

```python
x509_base64_certificate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificates
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificates">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificates</a>

---


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oauth_partner_certificates

dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_oauth_partner_certificates

dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTags">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTags">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTags</a>

---



