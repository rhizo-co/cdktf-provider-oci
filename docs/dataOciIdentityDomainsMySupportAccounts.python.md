# `dataOciIdentityDomainsMySupportAccounts` Submodule <a name="`dataOciIdentityDomainsMySupportAccounts` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMySupportAccounts <a name="DataOciIdentityDomainsMySupportAccounts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts oci_identity_domains_my_support_accounts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_support_accounts

dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts(
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
  my_support_account_count: typing.Union[int, float] = None,
  my_support_account_filter: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#idcs_endpoint DataOciIdentityDomainsMySupportAccounts#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#authorization DataOciIdentityDomainsMySupportAccounts#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#compartment_id DataOciIdentityDomainsMySupportAccounts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#id DataOciIdentityDomainsMySupportAccounts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.mySupportAccountCount">my_support_account_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#my_support_account_count DataOciIdentityDomainsMySupportAccounts#my_support_account_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.mySupportAccountFilter">my_support_account_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#my_support_account_filter DataOciIdentityDomainsMySupportAccounts#my_support_account_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#resource_type_schema_version DataOciIdentityDomainsMySupportAccounts#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#sort_by DataOciIdentityDomainsMySupportAccounts#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#sort_order DataOciIdentityDomainsMySupportAccounts#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#start_index DataOciIdentityDomainsMySupportAccounts#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#idcs_endpoint DataOciIdentityDomainsMySupportAccounts#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#authorization DataOciIdentityDomainsMySupportAccounts#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#compartment_id DataOciIdentityDomainsMySupportAccounts#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#id DataOciIdentityDomainsMySupportAccounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `my_support_account_count`<sup>Optional</sup> <a name="my_support_account_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.mySupportAccountCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#my_support_account_count DataOciIdentityDomainsMySupportAccounts#my_support_account_count}.

---

##### `my_support_account_filter`<sup>Optional</sup> <a name="my_support_account_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.mySupportAccountFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#my_support_account_filter DataOciIdentityDomainsMySupportAccounts#my_support_account_filter}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#resource_type_schema_version DataOciIdentityDomainsMySupportAccounts#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.sortBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#sort_by DataOciIdentityDomainsMySupportAccounts#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.sortOrder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#sort_order DataOciIdentityDomainsMySupportAccounts#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.Initializer.parameter.startIndex"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#start_index DataOciIdentityDomainsMySupportAccounts#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.resetMySupportAccountCount">reset_my_support_account_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.resetMySupportAccountFilter">reset_my_support_account_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.resetSortBy">reset_sort_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.resetSortOrder">reset_sort_order</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.resetStartIndex">reset_start_index</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_my_support_account_count` <a name="reset_my_support_account_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.resetMySupportAccountCount"></a>

```python
def reset_my_support_account_count() -> None
```

##### `reset_my_support_account_filter` <a name="reset_my_support_account_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.resetMySupportAccountFilter"></a>

```python
def reset_my_support_account_filter() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_sort_by` <a name="reset_sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.resetSortBy"></a>

```python
def reset_sort_by() -> None
```

##### `reset_sort_order` <a name="reset_sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.resetSortOrder"></a>

```python
def reset_sort_order() -> None
```

##### `reset_start_index` <a name="reset_start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.resetStartIndex"></a>

```python
def reset_start_index() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMySupportAccounts resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_support_accounts

dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_support_accounts

dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_support_accounts

dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_support_accounts

dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsMySupportAccounts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsMySupportAccounts to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsMySupportAccounts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMySupportAccounts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.mySupportAccounts">my_support_accounts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList">DataOciIdentityDomainsMySupportAccountsMySupportAccountsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.totalResults">total_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.mySupportAccountCountInput">my_support_account_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.mySupportAccountFilterInput">my_support_account_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.sortByInput">sort_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.sortOrderInput">sort_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.startIndexInput">start_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.mySupportAccountCount">my_support_account_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.mySupportAccountFilter">my_support_account_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.sortBy">sort_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.sortOrder">sort_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `my_support_accounts`<sup>Required</sup> <a name="my_support_accounts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.mySupportAccounts"></a>

```python
my_support_accounts: DataOciIdentityDomainsMySupportAccountsMySupportAccountsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList">DataOciIdentityDomainsMySupportAccountsMySupportAccountsList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `total_results`<sup>Required</sup> <a name="total_results" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.totalResults"></a>

```python
total_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `my_support_account_count_input`<sup>Optional</sup> <a name="my_support_account_count_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.mySupportAccountCountInput"></a>

```python
my_support_account_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `my_support_account_filter_input`<sup>Optional</sup> <a name="my_support_account_filter_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.mySupportAccountFilterInput"></a>

```python
my_support_account_filter_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `sort_by_input`<sup>Optional</sup> <a name="sort_by_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.sortByInput"></a>

```python
sort_by_input: str
```

- *Type:* str

---

##### `sort_order_input`<sup>Optional</sup> <a name="sort_order_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.sortOrderInput"></a>

```python
sort_order_input: str
```

- *Type:* str

---

##### `start_index_input`<sup>Optional</sup> <a name="start_index_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.startIndexInput"></a>

```python
start_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `my_support_account_count`<sup>Required</sup> <a name="my_support_account_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.mySupportAccountCount"></a>

```python
my_support_account_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `my_support_account_filter`<sup>Required</sup> <a name="my_support_account_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.mySupportAccountFilter"></a>

```python
my_support_account_filter: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `sort_by`<sup>Required</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

---

##### `start_index`<sup>Required</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccounts.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMySupportAccountsConfig <a name="DataOciIdentityDomainsMySupportAccountsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_support_accounts

dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig(
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
  my_support_account_count: typing.Union[int, float] = None,
  my_support_account_filter: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#idcs_endpoint DataOciIdentityDomainsMySupportAccounts#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#authorization DataOciIdentityDomainsMySupportAccounts#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#compartment_id DataOciIdentityDomainsMySupportAccounts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#id DataOciIdentityDomainsMySupportAccounts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.mySupportAccountCount">my_support_account_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#my_support_account_count DataOciIdentityDomainsMySupportAccounts#my_support_account_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.mySupportAccountFilter">my_support_account_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#my_support_account_filter DataOciIdentityDomainsMySupportAccounts#my_support_account_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#resource_type_schema_version DataOciIdentityDomainsMySupportAccounts#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#sort_by DataOciIdentityDomainsMySupportAccounts#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#sort_order DataOciIdentityDomainsMySupportAccounts#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#start_index DataOciIdentityDomainsMySupportAccounts#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#idcs_endpoint DataOciIdentityDomainsMySupportAccounts#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#authorization DataOciIdentityDomainsMySupportAccounts#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#compartment_id DataOciIdentityDomainsMySupportAccounts#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#id DataOciIdentityDomainsMySupportAccounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `my_support_account_count`<sup>Optional</sup> <a name="my_support_account_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.mySupportAccountCount"></a>

```python
my_support_account_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#my_support_account_count DataOciIdentityDomainsMySupportAccounts#my_support_account_count}.

---

##### `my_support_account_filter`<sup>Optional</sup> <a name="my_support_account_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.mySupportAccountFilter"></a>

```python
my_support_account_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#my_support_account_filter DataOciIdentityDomainsMySupportAccounts#my_support_account_filter}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#resource_type_schema_version DataOciIdentityDomainsMySupportAccounts#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#sort_by DataOciIdentityDomainsMySupportAccounts#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#sort_order DataOciIdentityDomainsMySupportAccounts#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsConfig.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_support_accounts#start_index DataOciIdentityDomainsMySupportAccounts#start_index}.

---

### DataOciIdentityDomainsMySupportAccountsMySupportAccounts <a name="DataOciIdentityDomainsMySupportAccountsMySupportAccounts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccounts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccounts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_support_accounts

dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccounts()
```


### DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedBy <a name="DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_support_accounts

dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedBy()
```


### DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedBy <a name="DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_support_accounts

dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedBy()
```


### DataOciIdentityDomainsMySupportAccountsMySupportAccountsMeta <a name="DataOciIdentityDomainsMySupportAccountsMySupportAccountsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_support_accounts

dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMeta()
```


### DataOciIdentityDomainsMySupportAccountsMySupportAccountsTags <a name="DataOciIdentityDomainsMySupportAccountsMySupportAccountsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_support_accounts

dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTags()
```


### DataOciIdentityDomainsMySupportAccountsMySupportAccountsUser <a name="DataOciIdentityDomainsMySupportAccountsMySupportAccountsUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUser.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_support_accounts

dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUser()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList <a name="DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_support_accounts

dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_support_accounts

dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedBy">DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedBy">DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList <a name="DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_support_accounts

dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_support_accounts

dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedBy">DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedBy">DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMySupportAccountsMySupportAccountsList <a name="DataOciIdentityDomainsMySupportAccountsMySupportAccountsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_support_accounts

dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList <a name="DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_support_accounts

dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference <a name="DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_support_accounts

dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMeta">DataOciIdentityDomainsMySupportAccountsMySupportAccountsMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMySupportAccountsMySupportAccountsMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMeta">DataOciIdentityDomainsMySupportAccountsMySupportAccountsMeta</a>

---


### DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference <a name="DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_support_accounts

dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList">DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList">DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList">DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.mySupportAccountProvider">my_support_account_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList">DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList">DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccounts">DataOciIdentityDomainsMySupportAccountsMySupportAccounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList">DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsCreatedByList</a>

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList">DataOciIdentityDomainsMySupportAccountsMySupportAccountsIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.meta"></a>

```python
meta: DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList">DataOciIdentityDomainsMySupportAccountsMySupportAccountsMetaList</a>

---

##### `my_support_account_provider`<sup>Required</sup> <a name="my_support_account_provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.mySupportAccountProvider"></a>

```python
my_support_account_provider: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.tags"></a>

```python
tags: DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList">DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.user"></a>

```python
user: DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList">DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList</a>

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMySupportAccountsMySupportAccounts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccounts">DataOciIdentityDomainsMySupportAccountsMySupportAccounts</a>

---


### DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList <a name="DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_support_accounts

dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference <a name="DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_support_accounts

dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTags">DataOciIdentityDomainsMySupportAccountsMySupportAccountsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMySupportAccountsMySupportAccountsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsTags">DataOciIdentityDomainsMySupportAccountsMySupportAccountsTags</a>

---


### DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList <a name="DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_support_accounts

dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference <a name="DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_support_accounts

dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUser">DataOciIdentityDomainsMySupportAccountsMySupportAccountsUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUserOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMySupportAccountsMySupportAccountsUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySupportAccounts.DataOciIdentityDomainsMySupportAccountsMySupportAccountsUser">DataOciIdentityDomainsMySupportAccountsMySupportAccountsUser</a>

---



