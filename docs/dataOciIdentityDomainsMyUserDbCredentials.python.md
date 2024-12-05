# `dataOciIdentityDomainsMyUserDbCredentials` Submodule <a name="`dataOciIdentityDomainsMyUserDbCredentials` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMyUserDbCredentials <a name="DataOciIdentityDomainsMyUserDbCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials oci_identity_domains_my_user_db_credentials}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_user_db_credentials

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials(
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
  my_user_db_credential_count: typing.Union[int, float] = None,
  my_user_db_credential_filter: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#idcs_endpoint DataOciIdentityDomainsMyUserDbCredentials#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#authorization DataOciIdentityDomainsMyUserDbCredentials#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#compartment_id DataOciIdentityDomainsMyUserDbCredentials#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#id DataOciIdentityDomainsMyUserDbCredentials#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.myUserDbCredentialCount">my_user_db_credential_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#my_user_db_credential_count DataOciIdentityDomainsMyUserDbCredentials#my_user_db_credential_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.myUserDbCredentialFilter">my_user_db_credential_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#my_user_db_credential_filter DataOciIdentityDomainsMyUserDbCredentials#my_user_db_credential_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#resource_type_schema_version DataOciIdentityDomainsMyUserDbCredentials#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#sort_by DataOciIdentityDomainsMyUserDbCredentials#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#sort_order DataOciIdentityDomainsMyUserDbCredentials#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#start_index DataOciIdentityDomainsMyUserDbCredentials#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#idcs_endpoint DataOciIdentityDomainsMyUserDbCredentials#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#authorization DataOciIdentityDomainsMyUserDbCredentials#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#compartment_id DataOciIdentityDomainsMyUserDbCredentials#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#id DataOciIdentityDomainsMyUserDbCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `my_user_db_credential_count`<sup>Optional</sup> <a name="my_user_db_credential_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.myUserDbCredentialCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#my_user_db_credential_count DataOciIdentityDomainsMyUserDbCredentials#my_user_db_credential_count}.

---

##### `my_user_db_credential_filter`<sup>Optional</sup> <a name="my_user_db_credential_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.myUserDbCredentialFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#my_user_db_credential_filter DataOciIdentityDomainsMyUserDbCredentials#my_user_db_credential_filter}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#resource_type_schema_version DataOciIdentityDomainsMyUserDbCredentials#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.sortBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#sort_by DataOciIdentityDomainsMyUserDbCredentials#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.sortOrder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#sort_order DataOciIdentityDomainsMyUserDbCredentials#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.startIndex"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#start_index DataOciIdentityDomainsMyUserDbCredentials#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetMyUserDbCredentialCount">reset_my_user_db_credential_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetMyUserDbCredentialFilter">reset_my_user_db_credential_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetSortBy">reset_sort_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetSortOrder">reset_sort_order</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetStartIndex">reset_start_index</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_my_user_db_credential_count` <a name="reset_my_user_db_credential_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetMyUserDbCredentialCount"></a>

```python
def reset_my_user_db_credential_count() -> None
```

##### `reset_my_user_db_credential_filter` <a name="reset_my_user_db_credential_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetMyUserDbCredentialFilter"></a>

```python
def reset_my_user_db_credential_filter() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_sort_by` <a name="reset_sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetSortBy"></a>

```python
def reset_sort_by() -> None
```

##### `reset_sort_order` <a name="reset_sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetSortOrder"></a>

```python
def reset_sort_order() -> None
```

##### `reset_start_index` <a name="reset_start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetStartIndex"></a>

```python
def reset_start_index() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMyUserDbCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_user_db_credentials

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_user_db_credentials

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_user_db_credentials

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_user_db_credentials

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsMyUserDbCredentials resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsMyUserDbCredentials to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsMyUserDbCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMyUserDbCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentials">my_user_db_credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.totalResults">total_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialCountInput">my_user_db_credential_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialFilterInput">my_user_db_credential_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortByInput">sort_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortOrderInput">sort_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.startIndexInput">start_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialCount">my_user_db_credential_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialFilter">my_user_db_credential_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortBy">sort_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortOrder">sort_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `my_user_db_credentials`<sup>Required</sup> <a name="my_user_db_credentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentials"></a>

```python
my_user_db_credentials: DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `total_results`<sup>Required</sup> <a name="total_results" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.totalResults"></a>

```python
total_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `my_user_db_credential_count_input`<sup>Optional</sup> <a name="my_user_db_credential_count_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialCountInput"></a>

```python
my_user_db_credential_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `my_user_db_credential_filter_input`<sup>Optional</sup> <a name="my_user_db_credential_filter_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialFilterInput"></a>

```python
my_user_db_credential_filter_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `sort_by_input`<sup>Optional</sup> <a name="sort_by_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortByInput"></a>

```python
sort_by_input: str
```

- *Type:* str

---

##### `sort_order_input`<sup>Optional</sup> <a name="sort_order_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortOrderInput"></a>

```python
sort_order_input: str
```

- *Type:* str

---

##### `start_index_input`<sup>Optional</sup> <a name="start_index_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.startIndexInput"></a>

```python
start_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `my_user_db_credential_count`<sup>Required</sup> <a name="my_user_db_credential_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialCount"></a>

```python
my_user_db_credential_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `my_user_db_credential_filter`<sup>Required</sup> <a name="my_user_db_credential_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialFilter"></a>

```python
my_user_db_credential_filter: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `sort_by`<sup>Required</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

---

##### `start_index`<sup>Required</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMyUserDbCredentialsConfig <a name="DataOciIdentityDomainsMyUserDbCredentialsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_user_db_credentials

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig(
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
  my_user_db_credential_count: typing.Union[int, float] = None,
  my_user_db_credential_filter: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#idcs_endpoint DataOciIdentityDomainsMyUserDbCredentials#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#authorization DataOciIdentityDomainsMyUserDbCredentials#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#compartment_id DataOciIdentityDomainsMyUserDbCredentials#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#id DataOciIdentityDomainsMyUserDbCredentials#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.myUserDbCredentialCount">my_user_db_credential_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#my_user_db_credential_count DataOciIdentityDomainsMyUserDbCredentials#my_user_db_credential_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.myUserDbCredentialFilter">my_user_db_credential_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#my_user_db_credential_filter DataOciIdentityDomainsMyUserDbCredentials#my_user_db_credential_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#resource_type_schema_version DataOciIdentityDomainsMyUserDbCredentials#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#sort_by DataOciIdentityDomainsMyUserDbCredentials#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#sort_order DataOciIdentityDomainsMyUserDbCredentials#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#start_index DataOciIdentityDomainsMyUserDbCredentials#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#idcs_endpoint DataOciIdentityDomainsMyUserDbCredentials#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#authorization DataOciIdentityDomainsMyUserDbCredentials#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#compartment_id DataOciIdentityDomainsMyUserDbCredentials#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#id DataOciIdentityDomainsMyUserDbCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `my_user_db_credential_count`<sup>Optional</sup> <a name="my_user_db_credential_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.myUserDbCredentialCount"></a>

```python
my_user_db_credential_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#my_user_db_credential_count DataOciIdentityDomainsMyUserDbCredentials#my_user_db_credential_count}.

---

##### `my_user_db_credential_filter`<sup>Optional</sup> <a name="my_user_db_credential_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.myUserDbCredentialFilter"></a>

```python
my_user_db_credential_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#my_user_db_credential_filter DataOciIdentityDomainsMyUserDbCredentials#my_user_db_credential_filter}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#resource_type_schema_version DataOciIdentityDomainsMyUserDbCredentials#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#sort_by DataOciIdentityDomainsMyUserDbCredentials#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#sort_order DataOciIdentityDomainsMyUserDbCredentials#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#start_index DataOciIdentityDomainsMyUserDbCredentials#start_index}.

---

### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_user_db_credentials

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials()
```


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_user_db_credentials

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy()
```


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_user_db_credentials

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy()
```


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_user_db_credentials

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta()
```


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_user_db_credentials

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags()
```


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_user_db_credentials

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_user_db_credentials

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_user_db_credentials

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_user_db_credentials

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_user_db_credentials

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_user_db_credentials

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_user_db_credentials

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_user_db_credentials

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta</a>

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_user_db_credentials

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.dbPassword">db_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.expired">expired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.expiresOn">expires_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.lastSetDate">last_set_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.mixedDbPassword">mixed_db_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.mixedSalt">mixed_salt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.salt">salt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `db_password`<sup>Required</sup> <a name="db_password" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.dbPassword"></a>

```python
db_password: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `expired`<sup>Required</sup> <a name="expired" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.expired"></a>

```python
expired: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `expires_on`<sup>Required</sup> <a name="expires_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.expiresOn"></a>

```python
expires_on: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList</a>

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `last_set_date`<sup>Required</sup> <a name="last_set_date" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.lastSetDate"></a>

```python
last_set_date: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.meta"></a>

```python
meta: DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList</a>

---

##### `mixed_db_password`<sup>Required</sup> <a name="mixed_db_password" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.mixedDbPassword"></a>

```python
mixed_db_password: str
```

- *Type:* str

---

##### `mixed_salt`<sup>Required</sup> <a name="mixed_salt" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.mixedSalt"></a>

```python
mixed_salt: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `salt`<sup>Required</sup> <a name="salt" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.salt"></a>

```python
salt: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.tags"></a>

```python
tags: DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.user"></a>

```python
user: DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials</a>

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_user_db_credentials

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_user_db_credentials

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags</a>

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_user_db_credentials

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_user_db_credentials

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser</a>

---



