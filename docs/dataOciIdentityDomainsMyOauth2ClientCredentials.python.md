# `dataOciIdentityDomainsMyOauth2ClientCredentials` Submodule <a name="`dataOciIdentityDomainsMyOauth2ClientCredentials` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMyOauth2ClientCredentials <a name="DataOciIdentityDomainsMyOauth2ClientCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials oci_identity_domains_my_oauth2client_credentials}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials(
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
  my_oauth2_client_credential_count: typing.Union[int, float] = None,
  my_oauth2_client_credential_filter: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#idcs_endpoint DataOciIdentityDomainsMyOauth2ClientCredentials#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#authorization DataOciIdentityDomainsMyOauth2ClientCredentials#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#compartment_id DataOciIdentityDomainsMyOauth2ClientCredentials#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#id DataOciIdentityDomainsMyOauth2ClientCredentials#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.myOauth2ClientCredentialCount">my_oauth2_client_credential_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#my_oauth2client_credential_count DataOciIdentityDomainsMyOauth2ClientCredentials#my_oauth2client_credential_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.myOauth2ClientCredentialFilter">my_oauth2_client_credential_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#my_oauth2client_credential_filter DataOciIdentityDomainsMyOauth2ClientCredentials#my_oauth2client_credential_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#resource_type_schema_version DataOciIdentityDomainsMyOauth2ClientCredentials#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#sort_by DataOciIdentityDomainsMyOauth2ClientCredentials#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#sort_order DataOciIdentityDomainsMyOauth2ClientCredentials#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#start_index DataOciIdentityDomainsMyOauth2ClientCredentials#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#idcs_endpoint DataOciIdentityDomainsMyOauth2ClientCredentials#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#authorization DataOciIdentityDomainsMyOauth2ClientCredentials#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#compartment_id DataOciIdentityDomainsMyOauth2ClientCredentials#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#id DataOciIdentityDomainsMyOauth2ClientCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `my_oauth2_client_credential_count`<sup>Optional</sup> <a name="my_oauth2_client_credential_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.myOauth2ClientCredentialCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#my_oauth2client_credential_count DataOciIdentityDomainsMyOauth2ClientCredentials#my_oauth2client_credential_count}.

---

##### `my_oauth2_client_credential_filter`<sup>Optional</sup> <a name="my_oauth2_client_credential_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.myOauth2ClientCredentialFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#my_oauth2client_credential_filter DataOciIdentityDomainsMyOauth2ClientCredentials#my_oauth2client_credential_filter}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#resource_type_schema_version DataOciIdentityDomainsMyOauth2ClientCredentials#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.sortBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#sort_by DataOciIdentityDomainsMyOauth2ClientCredentials#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.sortOrder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#sort_order DataOciIdentityDomainsMyOauth2ClientCredentials#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.startIndex"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#start_index DataOciIdentityDomainsMyOauth2ClientCredentials#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetMyOauth2ClientCredentialCount">reset_my_oauth2_client_credential_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetMyOauth2ClientCredentialFilter">reset_my_oauth2_client_credential_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetSortBy">reset_sort_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetSortOrder">reset_sort_order</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetStartIndex">reset_start_index</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_my_oauth2_client_credential_count` <a name="reset_my_oauth2_client_credential_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetMyOauth2ClientCredentialCount"></a>

```python
def reset_my_oauth2_client_credential_count() -> None
```

##### `reset_my_oauth2_client_credential_filter` <a name="reset_my_oauth2_client_credential_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetMyOauth2ClientCredentialFilter"></a>

```python
def reset_my_oauth2_client_credential_filter() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_sort_by` <a name="reset_sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetSortBy"></a>

```python
def reset_sort_by() -> None
```

##### `reset_sort_order` <a name="reset_sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetSortOrder"></a>

```python
def reset_sort_order() -> None
```

##### `reset_start_index` <a name="reset_start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetStartIndex"></a>

```python
def reset_start_index() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMyOauth2ClientCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsMyOauth2ClientCredentials resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsMyOauth2ClientCredentials to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsMyOauth2ClientCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMyOauth2ClientCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.myOauth2ClientCredentials">my_oauth2_client_credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.totalResults">total_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.myOauth2ClientCredentialCountInput">my_oauth2_client_credential_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.myOauth2ClientCredentialFilterInput">my_oauth2_client_credential_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.sortByInput">sort_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.sortOrderInput">sort_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.startIndexInput">start_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.myOauth2ClientCredentialCount">my_oauth2_client_credential_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.myOauth2ClientCredentialFilter">my_oauth2_client_credential_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.sortBy">sort_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.sortOrder">sort_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `my_oauth2_client_credentials`<sup>Required</sup> <a name="my_oauth2_client_credentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.myOauth2ClientCredentials"></a>

```python
my_oauth2_client_credentials: DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `total_results`<sup>Required</sup> <a name="total_results" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.totalResults"></a>

```python
total_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `my_oauth2_client_credential_count_input`<sup>Optional</sup> <a name="my_oauth2_client_credential_count_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.myOauth2ClientCredentialCountInput"></a>

```python
my_oauth2_client_credential_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `my_oauth2_client_credential_filter_input`<sup>Optional</sup> <a name="my_oauth2_client_credential_filter_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.myOauth2ClientCredentialFilterInput"></a>

```python
my_oauth2_client_credential_filter_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `sort_by_input`<sup>Optional</sup> <a name="sort_by_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.sortByInput"></a>

```python
sort_by_input: str
```

- *Type:* str

---

##### `sort_order_input`<sup>Optional</sup> <a name="sort_order_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.sortOrderInput"></a>

```python
sort_order_input: str
```

- *Type:* str

---

##### `start_index_input`<sup>Optional</sup> <a name="start_index_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.startIndexInput"></a>

```python
start_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `my_oauth2_client_credential_count`<sup>Required</sup> <a name="my_oauth2_client_credential_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.myOauth2ClientCredentialCount"></a>

```python
my_oauth2_client_credential_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `my_oauth2_client_credential_filter`<sup>Required</sup> <a name="my_oauth2_client_credential_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.myOauth2ClientCredentialFilter"></a>

```python
my_oauth2_client_credential_filter: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `sort_by`<sup>Required</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

---

##### `start_index`<sup>Required</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMyOauth2ClientCredentialsConfig <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig(
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
  my_oauth2_client_credential_count: typing.Union[int, float] = None,
  my_oauth2_client_credential_filter: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#idcs_endpoint DataOciIdentityDomainsMyOauth2ClientCredentials#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#authorization DataOciIdentityDomainsMyOauth2ClientCredentials#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#compartment_id DataOciIdentityDomainsMyOauth2ClientCredentials#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#id DataOciIdentityDomainsMyOauth2ClientCredentials#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.myOauth2ClientCredentialCount">my_oauth2_client_credential_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#my_oauth2client_credential_count DataOciIdentityDomainsMyOauth2ClientCredentials#my_oauth2client_credential_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.myOauth2ClientCredentialFilter">my_oauth2_client_credential_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#my_oauth2client_credential_filter DataOciIdentityDomainsMyOauth2ClientCredentials#my_oauth2client_credential_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#resource_type_schema_version DataOciIdentityDomainsMyOauth2ClientCredentials#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#sort_by DataOciIdentityDomainsMyOauth2ClientCredentials#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#sort_order DataOciIdentityDomainsMyOauth2ClientCredentials#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#start_index DataOciIdentityDomainsMyOauth2ClientCredentials#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#idcs_endpoint DataOciIdentityDomainsMyOauth2ClientCredentials#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#authorization DataOciIdentityDomainsMyOauth2ClientCredentials#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#compartment_id DataOciIdentityDomainsMyOauth2ClientCredentials#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#id DataOciIdentityDomainsMyOauth2ClientCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `my_oauth2_client_credential_count`<sup>Optional</sup> <a name="my_oauth2_client_credential_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.myOauth2ClientCredentialCount"></a>

```python
my_oauth2_client_credential_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#my_oauth2client_credential_count DataOciIdentityDomainsMyOauth2ClientCredentials#my_oauth2client_credential_count}.

---

##### `my_oauth2_client_credential_filter`<sup>Optional</sup> <a name="my_oauth2_client_credential_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.myOauth2ClientCredentialFilter"></a>

```python
my_oauth2_client_credential_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#my_oauth2client_credential_filter DataOciIdentityDomainsMyOauth2ClientCredentials#my_oauth2client_credential_filter}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#resource_type_schema_version DataOciIdentityDomainsMyOauth2ClientCredentials#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#sort_by DataOciIdentityDomainsMyOauth2ClientCredentials#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#sort_order DataOciIdentityDomainsMyOauth2ClientCredentials#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#start_index DataOciIdentityDomainsMyOauth2ClientCredentials#start_index}.

---

### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentials <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentials()
```


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedBy <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedBy()
```


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedBy <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedBy()
```


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMeta <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMeta()
```


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopes <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopes()
```


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTags <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTags()
```


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUser <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUser.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUser()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedBy">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedBy">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedBy">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedBy">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMeta">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMeta">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMeta</a>

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.expiresOn">expires_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.isResetSecret">is_reset_secret</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.scopes">scopes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentials">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `expires_on`<sup>Required</sup> <a name="expires_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.expiresOn"></a>

```python
expires_on: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList</a>

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_reset_secret`<sup>Required</sup> <a name="is_reset_secret" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.isResetSecret"></a>

```python
is_reset_secret: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.meta"></a>

```python
meta: DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.scopes"></a>

```python
scopes: DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.tags"></a>

```python
tags: DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.user"></a>

```python
user: DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentials">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentials</a>

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopes">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopes">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopes</a>

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTags">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTags">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTags</a>

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_oauth2_client_credentials

dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUser">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUser">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUser</a>

---



