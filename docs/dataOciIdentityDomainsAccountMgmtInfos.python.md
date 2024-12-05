# `dataOciIdentityDomainsAccountMgmtInfos` Submodule <a name="`dataOciIdentityDomainsAccountMgmtInfos` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsAccountMgmtInfos <a name="DataOciIdentityDomainsAccountMgmtInfos" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos oci_identity_domains_account_mgmt_infos}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos(
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
  account_mgmt_info_count: typing.Union[int, float] = None,
  account_mgmt_info_filter: str = None,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  compartment_id: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#idcs_endpoint DataOciIdentityDomainsAccountMgmtInfos#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.accountMgmtInfoCount">account_mgmt_info_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#account_mgmt_info_count DataOciIdentityDomainsAccountMgmtInfos#account_mgmt_info_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.accountMgmtInfoFilter">account_mgmt_info_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#account_mgmt_info_filter DataOciIdentityDomainsAccountMgmtInfos#account_mgmt_info_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#attributes DataOciIdentityDomainsAccountMgmtInfos#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#attribute_sets DataOciIdentityDomainsAccountMgmtInfos#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#authorization DataOciIdentityDomainsAccountMgmtInfos#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#compartment_id DataOciIdentityDomainsAccountMgmtInfos#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#resource_type_schema_version DataOciIdentityDomainsAccountMgmtInfos#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#sort_by DataOciIdentityDomainsAccountMgmtInfos#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#sort_order DataOciIdentityDomainsAccountMgmtInfos#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#start_index DataOciIdentityDomainsAccountMgmtInfos#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#idcs_endpoint DataOciIdentityDomainsAccountMgmtInfos#idcs_endpoint}.

---

##### `account_mgmt_info_count`<sup>Optional</sup> <a name="account_mgmt_info_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.accountMgmtInfoCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#account_mgmt_info_count DataOciIdentityDomainsAccountMgmtInfos#account_mgmt_info_count}.

---

##### `account_mgmt_info_filter`<sup>Optional</sup> <a name="account_mgmt_info_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.accountMgmtInfoFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#account_mgmt_info_filter DataOciIdentityDomainsAccountMgmtInfos#account_mgmt_info_filter}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#attributes DataOciIdentityDomainsAccountMgmtInfos#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#attribute_sets DataOciIdentityDomainsAccountMgmtInfos#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#authorization DataOciIdentityDomainsAccountMgmtInfos#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#compartment_id DataOciIdentityDomainsAccountMgmtInfos#compartment_id}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#resource_type_schema_version DataOciIdentityDomainsAccountMgmtInfos#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.sortBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#sort_by DataOciIdentityDomainsAccountMgmtInfos#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.sortOrder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#sort_order DataOciIdentityDomainsAccountMgmtInfos#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.startIndex"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#start_index DataOciIdentityDomainsAccountMgmtInfos#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAccountMgmtInfoCount">reset_account_mgmt_info_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAccountMgmtInfoFilter">reset_account_mgmt_info_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetSortBy">reset_sort_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetSortOrder">reset_sort_order</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetStartIndex">reset_start_index</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_mgmt_info_count` <a name="reset_account_mgmt_info_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAccountMgmtInfoCount"></a>

```python
def reset_account_mgmt_info_count() -> None
```

##### `reset_account_mgmt_info_filter` <a name="reset_account_mgmt_info_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAccountMgmtInfoFilter"></a>

```python
def reset_account_mgmt_info_filter() -> None
```

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_sort_by` <a name="reset_sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetSortBy"></a>

```python
def reset_sort_by() -> None
```

##### `reset_sort_order` <a name="reset_sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetSortOrder"></a>

```python
def reset_sort_order() -> None
```

##### `reset_start_index` <a name="reset_start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetStartIndex"></a>

```python
def reset_start_index() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsAccountMgmtInfos resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsAccountMgmtInfos resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsAccountMgmtInfos to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsAccountMgmtInfos that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsAccountMgmtInfos to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfos">account_mgmt_infos</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.totalResults">total_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfoCountInput">account_mgmt_info_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfoFilterInput">account_mgmt_info_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.sortByInput">sort_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.sortOrderInput">sort_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.startIndexInput">start_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfoCount">account_mgmt_info_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfoFilter">account_mgmt_info_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.sortBy">sort_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.sortOrder">sort_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `account_mgmt_infos`<sup>Required</sup> <a name="account_mgmt_infos" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfos"></a>

```python
account_mgmt_infos: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `total_results`<sup>Required</sup> <a name="total_results" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.totalResults"></a>

```python
total_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_mgmt_info_count_input`<sup>Optional</sup> <a name="account_mgmt_info_count_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfoCountInput"></a>

```python
account_mgmt_info_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_mgmt_info_filter_input`<sup>Optional</sup> <a name="account_mgmt_info_filter_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfoFilterInput"></a>

```python
account_mgmt_info_filter_input: str
```

- *Type:* str

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `sort_by_input`<sup>Optional</sup> <a name="sort_by_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.sortByInput"></a>

```python
sort_by_input: str
```

- *Type:* str

---

##### `sort_order_input`<sup>Optional</sup> <a name="sort_order_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.sortOrderInput"></a>

```python
sort_order_input: str
```

- *Type:* str

---

##### `start_index_input`<sup>Optional</sup> <a name="start_index_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.startIndexInput"></a>

```python
start_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_mgmt_info_count`<sup>Required</sup> <a name="account_mgmt_info_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfoCount"></a>

```python
account_mgmt_info_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_mgmt_info_filter`<sup>Required</sup> <a name="account_mgmt_info_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfoFilter"></a>

```python
account_mgmt_info_filter: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `sort_by`<sup>Required</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

---

##### `start_index`<sup>Required</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos()
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp()
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy()
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy()
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners()
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta()
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass()
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner()
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType()
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags()
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact()
```


### DataOciIdentityDomainsAccountMgmtInfosConfig <a name="DataOciIdentityDomainsAccountMgmtInfosConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  account_mgmt_info_count: typing.Union[int, float] = None,
  account_mgmt_info_filter: str = None,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  compartment_id: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#idcs_endpoint DataOciIdentityDomainsAccountMgmtInfos#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.accountMgmtInfoCount">account_mgmt_info_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#account_mgmt_info_count DataOciIdentityDomainsAccountMgmtInfos#account_mgmt_info_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.accountMgmtInfoFilter">account_mgmt_info_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#account_mgmt_info_filter DataOciIdentityDomainsAccountMgmtInfos#account_mgmt_info_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#attributes DataOciIdentityDomainsAccountMgmtInfos#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#attribute_sets DataOciIdentityDomainsAccountMgmtInfos#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#authorization DataOciIdentityDomainsAccountMgmtInfos#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#compartment_id DataOciIdentityDomainsAccountMgmtInfos#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#resource_type_schema_version DataOciIdentityDomainsAccountMgmtInfos#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#sort_by DataOciIdentityDomainsAccountMgmtInfos#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#sort_order DataOciIdentityDomainsAccountMgmtInfos#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#start_index DataOciIdentityDomainsAccountMgmtInfos#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#idcs_endpoint DataOciIdentityDomainsAccountMgmtInfos#idcs_endpoint}.

---

##### `account_mgmt_info_count`<sup>Optional</sup> <a name="account_mgmt_info_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.accountMgmtInfoCount"></a>

```python
account_mgmt_info_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#account_mgmt_info_count DataOciIdentityDomainsAccountMgmtInfos#account_mgmt_info_count}.

---

##### `account_mgmt_info_filter`<sup>Optional</sup> <a name="account_mgmt_info_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.accountMgmtInfoFilter"></a>

```python
account_mgmt_info_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#account_mgmt_info_filter DataOciIdentityDomainsAccountMgmtInfos#account_mgmt_info_filter}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#attributes DataOciIdentityDomainsAccountMgmtInfos#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#attribute_sets DataOciIdentityDomainsAccountMgmtInfos#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#authorization DataOciIdentityDomainsAccountMgmtInfos#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#compartment_id DataOciIdentityDomainsAccountMgmtInfos#compartment_id}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#resource_type_schema_version DataOciIdentityDomainsAccountMgmtInfos#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#sort_by DataOciIdentityDomainsAccountMgmtInfos#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#sort_order DataOciIdentityDomainsAccountMgmtInfos#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#start_index DataOciIdentityDomainsAccountMgmtInfos#start_index}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.appIcon">app_icon</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.appThumbnail">app_thumbnail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isAliasApp">is_alias_app</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isAuthoritative">is_authoritative</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isLoginTarget">is_login_target</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isManagedApp">is_managed_app</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isOauthResource">is_oauth_resource</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isOpcService">is_opc_service</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isUnmanagedApp">is_unmanaged_app</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.loginMechanism">login_mechanism</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.meterAsOpcService">meter_as_opc_service</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.serviceTypeUrn">service_type_urn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.showInMyApps">show_in_my_apps</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `app_icon`<sup>Required</sup> <a name="app_icon" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.appIcon"></a>

```python
app_icon: str
```

- *Type:* str

---

##### `app_thumbnail`<sup>Required</sup> <a name="app_thumbnail" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.appThumbnail"></a>

```python
app_thumbnail: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `is_alias_app`<sup>Required</sup> <a name="is_alias_app" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isAliasApp"></a>

```python
is_alias_app: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_authoritative`<sup>Required</sup> <a name="is_authoritative" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isAuthoritative"></a>

```python
is_authoritative: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_login_target`<sup>Required</sup> <a name="is_login_target" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isLoginTarget"></a>

```python
is_login_target: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_managed_app`<sup>Required</sup> <a name="is_managed_app" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isManagedApp"></a>

```python
is_managed_app: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_oauth_resource`<sup>Required</sup> <a name="is_oauth_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isOauthResource"></a>

```python
is_oauth_resource: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_opc_service`<sup>Required</sup> <a name="is_opc_service" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isOpcService"></a>

```python
is_opc_service: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_unmanaged_app`<sup>Required</sup> <a name="is_unmanaged_app" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isUnmanagedApp"></a>

```python
is_unmanaged_app: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `login_mechanism`<sup>Required</sup> <a name="login_mechanism" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.loginMechanism"></a>

```python
login_mechanism: str
```

- *Type:* str

---

##### `meter_as_opc_service`<sup>Required</sup> <a name="meter_as_opc_service" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.meterAsOpcService"></a>

```python
meter_as_opc_service: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `service_type_urn`<sup>Required</sup> <a name="service_type_urn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.serviceTypeUrn"></a>

```python
service_type_urn: str
```

- *Type:* str

---

##### `show_in_my_apps`<sup>Required</sup> <a name="show_in_my_apps" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.showInMyApps"></a>

```python
show_in_my_apps: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.accountMgmtInfoId">account_mgmt_info_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.accountType">account_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.app">app</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.compositeKey">composite_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.doNotBackFillGrants">do_not_back_fill_grants</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.doNotPerformActionOnTarget">do_not_perform_action_on_target</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.favorite">favorite</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.isAccount">is_account</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.lastAccessed">last_accessed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.matchingOwners">matching_owners</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.objectClass">object_class</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.operationContext">operation_context</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.owner">owner</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.previewOnly">preview_only</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.resourceType">resource_type</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.syncResponse">sync_response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.syncSituation">sync_situation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.syncTimestamp">sync_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.userWalletArtifact">user_wallet_artifact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_mgmt_info_id`<sup>Required</sup> <a name="account_mgmt_info_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.accountMgmtInfoId"></a>

```python
account_mgmt_info_id: str
```

- *Type:* str

---

##### `account_type`<sup>Required</sup> <a name="account_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.accountType"></a>

```python
account_type: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `app`<sup>Required</sup> <a name="app" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.app"></a>

```python
app: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList</a>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `composite_key`<sup>Required</sup> <a name="composite_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.compositeKey"></a>

```python
composite_key: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `do_not_back_fill_grants`<sup>Required</sup> <a name="do_not_back_fill_grants" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.doNotBackFillGrants"></a>

```python
do_not_back_fill_grants: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `do_not_perform_action_on_target`<sup>Required</sup> <a name="do_not_perform_action_on_target" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.doNotPerformActionOnTarget"></a>

```python
do_not_perform_action_on_target: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `favorite`<sup>Required</sup> <a name="favorite" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.favorite"></a>

```python
favorite: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList</a>

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_account`<sup>Required</sup> <a name="is_account" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.isAccount"></a>

```python
is_account: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_accessed`<sup>Required</sup> <a name="last_accessed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.lastAccessed"></a>

```python
last_accessed: str
```

- *Type:* str

---

##### `matching_owners`<sup>Required</sup> <a name="matching_owners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.matchingOwners"></a>

```python
matching_owners: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.meta"></a>

```python
meta: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `object_class`<sup>Required</sup> <a name="object_class" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.objectClass"></a>

```python
object_class: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `operation_context`<sup>Required</sup> <a name="operation_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.operationContext"></a>

```python
operation_context: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.owner"></a>

```python
owner: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList</a>

---

##### `preview_only`<sup>Required</sup> <a name="preview_only" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.previewOnly"></a>

```python
preview_only: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.resourceType"></a>

```python
resource_type: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList</a>

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sync_response`<sup>Required</sup> <a name="sync_response" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.syncResponse"></a>

```python
sync_response: str
```

- *Type:* str

---

##### `sync_situation`<sup>Required</sup> <a name="sync_situation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.syncSituation"></a>

```python
sync_situation: str
```

- *Type:* str

---

##### `sync_timestamp`<sup>Required</sup> <a name="sync_timestamp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.syncTimestamp"></a>

```python
sync_timestamp: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.tags"></a>

```python
tags: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `user_wallet_artifact`<sup>Required</sup> <a name="user_wallet_artifact" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.userWalletArtifact"></a>

```python
user_wallet_artifact: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_account_mgmt_infos

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact</a>

---



