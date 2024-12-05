# `dataOciIdentityDomainsUserDbCredentials` Submodule <a name="`dataOciIdentityDomainsUserDbCredentials` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsUserDbCredentials <a name="DataOciIdentityDomainsUserDbCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials oci_identity_domains_user_db_credentials}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials(
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
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  compartment_id: str = None,
  id: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None,
  user_db_credential_count: typing.Union[int, float] = None,
  user_db_credential_filter: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#idcs_endpoint DataOciIdentityDomainsUserDbCredentials#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#attributes DataOciIdentityDomainsUserDbCredentials#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#attribute_sets DataOciIdentityDomainsUserDbCredentials#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#authorization DataOciIdentityDomainsUserDbCredentials#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#compartment_id DataOciIdentityDomainsUserDbCredentials#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#id DataOciIdentityDomainsUserDbCredentials#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#resource_type_schema_version DataOciIdentityDomainsUserDbCredentials#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#sort_by DataOciIdentityDomainsUserDbCredentials#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#sort_order DataOciIdentityDomainsUserDbCredentials#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#start_index DataOciIdentityDomainsUserDbCredentials#start_index}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.userDbCredentialCount">user_db_credential_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#user_db_credential_count DataOciIdentityDomainsUserDbCredentials#user_db_credential_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.userDbCredentialFilter">user_db_credential_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#user_db_credential_filter DataOciIdentityDomainsUserDbCredentials#user_db_credential_filter}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#idcs_endpoint DataOciIdentityDomainsUserDbCredentials#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#attributes DataOciIdentityDomainsUserDbCredentials#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#attribute_sets DataOciIdentityDomainsUserDbCredentials#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#authorization DataOciIdentityDomainsUserDbCredentials#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#compartment_id DataOciIdentityDomainsUserDbCredentials#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#id DataOciIdentityDomainsUserDbCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#resource_type_schema_version DataOciIdentityDomainsUserDbCredentials#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.sortBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#sort_by DataOciIdentityDomainsUserDbCredentials#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.sortOrder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#sort_order DataOciIdentityDomainsUserDbCredentials#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.startIndex"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#start_index DataOciIdentityDomainsUserDbCredentials#start_index}.

---

##### `user_db_credential_count`<sup>Optional</sup> <a name="user_db_credential_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.userDbCredentialCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#user_db_credential_count DataOciIdentityDomainsUserDbCredentials#user_db_credential_count}.

---

##### `user_db_credential_filter`<sup>Optional</sup> <a name="user_db_credential_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.Initializer.parameter.userDbCredentialFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#user_db_credential_filter DataOciIdentityDomainsUserDbCredentials#user_db_credential_filter}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.resetSortBy">reset_sort_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.resetSortOrder">reset_sort_order</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.resetStartIndex">reset_start_index</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.resetUserDbCredentialCount">reset_user_db_credential_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.resetUserDbCredentialFilter">reset_user_db_credential_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_sort_by` <a name="reset_sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.resetSortBy"></a>

```python
def reset_sort_by() -> None
```

##### `reset_sort_order` <a name="reset_sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.resetSortOrder"></a>

```python
def reset_sort_order() -> None
```

##### `reset_start_index` <a name="reset_start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.resetStartIndex"></a>

```python
def reset_start_index() -> None
```

##### `reset_user_db_credential_count` <a name="reset_user_db_credential_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.resetUserDbCredentialCount"></a>

```python
def reset_user_db_credential_count() -> None
```

##### `reset_user_db_credential_filter` <a name="reset_user_db_credential_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.resetUserDbCredentialFilter"></a>

```python
def reset_user_db_credential_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsUserDbCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsUserDbCredentials resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsUserDbCredentials to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsUserDbCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsUserDbCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.totalResults">total_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.userDbCredentials">user_db_credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.sortByInput">sort_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.sortOrderInput">sort_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.startIndexInput">start_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.userDbCredentialCountInput">user_db_credential_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.userDbCredentialFilterInput">user_db_credential_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.sortBy">sort_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.sortOrder">sort_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.userDbCredentialCount">user_db_credential_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.userDbCredentialFilter">user_db_credential_filter</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `total_results`<sup>Required</sup> <a name="total_results" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.totalResults"></a>

```python
total_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_db_credentials`<sup>Required</sup> <a name="user_db_credentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.userDbCredentials"></a>

```python
user_db_credentials: DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList</a>

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `sort_by_input`<sup>Optional</sup> <a name="sort_by_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.sortByInput"></a>

```python
sort_by_input: str
```

- *Type:* str

---

##### `sort_order_input`<sup>Optional</sup> <a name="sort_order_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.sortOrderInput"></a>

```python
sort_order_input: str
```

- *Type:* str

---

##### `start_index_input`<sup>Optional</sup> <a name="start_index_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.startIndexInput"></a>

```python
start_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_db_credential_count_input`<sup>Optional</sup> <a name="user_db_credential_count_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.userDbCredentialCountInput"></a>

```python
user_db_credential_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_db_credential_filter_input`<sup>Optional</sup> <a name="user_db_credential_filter_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.userDbCredentialFilterInput"></a>

```python
user_db_credential_filter_input: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `sort_by`<sup>Required</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

---

##### `start_index`<sup>Required</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_db_credential_count`<sup>Required</sup> <a name="user_db_credential_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.userDbCredentialCount"></a>

```python
user_db_credential_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_db_credential_filter`<sup>Required</sup> <a name="user_db_credential_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.userDbCredentialFilter"></a>

```python
user_db_credential_filter: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentials.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsUserDbCredentialsConfig <a name="DataOciIdentityDomainsUserDbCredentialsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  compartment_id: str = None,
  id: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None,
  user_db_credential_count: typing.Union[int, float] = None,
  user_db_credential_filter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#idcs_endpoint DataOciIdentityDomainsUserDbCredentials#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#attributes DataOciIdentityDomainsUserDbCredentials#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#attribute_sets DataOciIdentityDomainsUserDbCredentials#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#authorization DataOciIdentityDomainsUserDbCredentials#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#compartment_id DataOciIdentityDomainsUserDbCredentials#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#id DataOciIdentityDomainsUserDbCredentials#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#resource_type_schema_version DataOciIdentityDomainsUserDbCredentials#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#sort_by DataOciIdentityDomainsUserDbCredentials#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#sort_order DataOciIdentityDomainsUserDbCredentials#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#start_index DataOciIdentityDomainsUserDbCredentials#start_index}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.userDbCredentialCount">user_db_credential_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#user_db_credential_count DataOciIdentityDomainsUserDbCredentials#user_db_credential_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.userDbCredentialFilter">user_db_credential_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#user_db_credential_filter DataOciIdentityDomainsUserDbCredentials#user_db_credential_filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#idcs_endpoint DataOciIdentityDomainsUserDbCredentials#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#attributes DataOciIdentityDomainsUserDbCredentials#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#attribute_sets DataOciIdentityDomainsUserDbCredentials#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#authorization DataOciIdentityDomainsUserDbCredentials#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#compartment_id DataOciIdentityDomainsUserDbCredentials#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#id DataOciIdentityDomainsUserDbCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#resource_type_schema_version DataOciIdentityDomainsUserDbCredentials#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#sort_by DataOciIdentityDomainsUserDbCredentials#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#sort_order DataOciIdentityDomainsUserDbCredentials#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#start_index DataOciIdentityDomainsUserDbCredentials#start_index}.

---

##### `user_db_credential_count`<sup>Optional</sup> <a name="user_db_credential_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.userDbCredentialCount"></a>

```python
user_db_credential_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#user_db_credential_count DataOciIdentityDomainsUserDbCredentials#user_db_credential_count}.

---

##### `user_db_credential_filter`<sup>Optional</sup> <a name="user_db_credential_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsConfig.property.userDbCredentialFilter"></a>

```python
user_db_credential_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_db_credentials#user_db_credential_filter DataOciIdentityDomainsUserDbCredentials#user_db_credential_filter}.

---

### DataOciIdentityDomainsUserDbCredentialsUserDbCredentials <a name="DataOciIdentityDomainsUserDbCredentialsUserDbCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentials()
```


### DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedBy <a name="DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedBy()
```


### DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedBy <a name="DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedBy()
```


### DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMeta <a name="DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMeta()
```


### DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTags <a name="DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTags()
```


### DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser <a name="DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser()
```


### DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUser <a name="DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUser.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUser()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList <a name="DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedBy">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedBy">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList <a name="DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedBy">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedBy">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList <a name="DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList <a name="DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference <a name="DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMeta">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMeta">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMeta</a>

---


### DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference <a name="DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.dbPassword">db_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.expired">expired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.expiresOn">expires_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.lastSetDate">last_set_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.mixedDbPassword">mixed_db_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.mixedSalt">mixed_salt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.salt">salt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser">urnietfparamsscimschemasoracleidcsextensionself_change_user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentials">DataOciIdentityDomainsUserDbCredentialsUserDbCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `db_password`<sup>Required</sup> <a name="db_password" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.dbPassword"></a>

```python
db_password: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `expired`<sup>Required</sup> <a name="expired" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.expired"></a>

```python
expired: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `expires_on`<sup>Required</sup> <a name="expires_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.expiresOn"></a>

```python
expires_on: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsCreatedByList</a>

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `last_set_date`<sup>Required</sup> <a name="last_set_date" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.lastSetDate"></a>

```python
last_set_date: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.meta"></a>

```python
meta: DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsMetaList</a>

---

##### `mixed_db_password`<sup>Required</sup> <a name="mixed_db_password" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.mixedDbPassword"></a>

```python
mixed_db_password: str
```

- *Type:* str

---

##### `mixed_salt`<sup>Required</sup> <a name="mixed_salt" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.mixedSalt"></a>

```python
mixed_salt: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `salt`<sup>Required</sup> <a name="salt" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.salt"></a>

```python
salt: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.tags"></a>

```python
tags: DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `urnietfparamsscimschemasoracleidcsextensionself_change_user`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionself_change_user" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

```python
urnietfparamsscimschemasoracleidcsextensionself_change_user: DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList</a>

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.user"></a>

```python
user: DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsUserDbCredentialsUserDbCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentials">DataOciIdentityDomainsUserDbCredentialsUserDbCredentials</a>

---


### DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList <a name="DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference <a name="DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTags">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTags">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsTags</a>

---


### DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList <a name="DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference <a name="DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChange">allow_self_change</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_self_change`<sup>Required</sup> <a name="allow_self_change" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChange"></a>

```python
allow_self_change: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a>

---


### DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList <a name="DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference <a name="DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_user_db_credentials

dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUser">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUserOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserDbCredentials.DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUser">DataOciIdentityDomainsUserDbCredentialsUserDbCredentialsUser</a>

---



